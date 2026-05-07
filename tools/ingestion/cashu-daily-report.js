#!/usr/bin/env node
/**
 * cashu-daily-report.js
 *
 * Fetches 24h activity from the cashubtc GitHub organization and renders a
 * human-readable report. Optionally delivers the report through the OpenClaw
 * message gateway.
 *
 * Tracked repositories (cashubtc/*):
 *   Numo, cashu-ts, cdk, coco, cashu.me, nuts, nutshell, BTCNutServer
 *
 * Configuration (environment variables):
 *   CASHU_REPORT_HOURS       Lookback window in hours. Default: 24
 *   CASHU_REPORT_REPOS       Comma-separated repo names under cashubtc/.
 *                            Default: the 8 repos listed above.
 *   CASHU_REPORT_TG_TARGET   Telegram chat/DM ID for --send-dm.
 *                            Required when --send-dm is passed.
 *   GITHUB_TOKEN             Optional; when set, used as a Bearer token so
 *                            unauthenticated rate limits don't bite.
 *
 * Flags:
 *   --send-dm        Deliver the report to the Telegram target configured by
 *                    CASHU_REPORT_TG_TARGET via `openclaw message send`.
 *   --send-group     Reserved for a future group channel. Currently a no-op.
 *   (default)        Dry run — print to stdout.
 *
 * Exit codes:
 *   0  Report generated (and, when requested, delivered).
 *   1  Fatal error (network, parsing, missing required config).
 *
 * This script is part of org-memory's ingestion/observation tooling. It reads
 * the public GitHub API only and produces a single text artifact. It does not
 * write into the wiki directly — the agent's synthesis step is responsible
 * for integrating its output into wiki/ and graph/.
 */

const https = require('https');
const { execFile } = require('child_process');

const DEFAULT_REPOS = ['Numo', 'cashu-ts', 'cdk', 'coco', 'cashu.me', 'nuts', 'nutshell', 'BTCNutServer'];

const REPOS = (process.env.CASHU_REPORT_REPOS || '').trim()
  ? process.env.CASHU_REPORT_REPOS.split(',').map(s => s.trim()).filter(Boolean)
  : DEFAULT_REPOS;

const SINCE_HOURS  = Number(process.env.CASHU_REPORT_HOURS || 24);
const TELEGRAM_DM  = process.env.CASHU_REPORT_TG_TARGET || '';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

const SEND_DM    = process.argv.includes('--send-dm');
const SEND_GROUP = process.argv.includes('--send-group');
const DRY_RUN    = !SEND_DM && !SEND_GROUP;

function fetch(url) {
  return new Promise((resolve, reject) => {
    const opts = new URL(url);
    opts.headers = {
      'User-Agent': 'org-memory-cashu-daily-report/1.0',
      'Accept': 'application/vnd.github.v3+json'
    };
    if (GITHUB_TOKEN) opts.headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
    https.get(opts, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function sinceDate() {
  return new Date(Date.now() - SINCE_HOURS * 3600 * 1000).toISOString();
}

async function getRepoActivity(repo) {
  const since = sinceDate();
  try {
    const [openPRs, closedPRs, issuesRaw] = await Promise.all([
      fetch(`https://api.github.com/repos/cashubtc/${repo}/pulls?state=open&sort=updated&direction=desc&per_page=30`),
      fetch(`https://api.github.com/repos/cashubtc/${repo}/pulls?state=closed&sort=updated&direction=desc&per_page=30`),
      fetch(`https://api.github.com/repos/cashubtc/${repo}/issues?state=open&per_page=30&sort=updated&direction=desc&since=${since}`)
    ]);

    for (const res of [openPRs, closedPRs, issuesRaw]) {
      if (!Array.isArray(res)) {
        throw new Error(res?.message || 'unexpected API response');
      }
    }

    const updatedPRs = openPRs.filter(pr => pr.updated_at > since);
    const mergedPRs  = closedPRs.filter(pr => pr.merged_at && pr.merged_at > since);
    const issues     = issuesRaw.filter(i => !i.pull_request && i.updated_at > since);

    const total = updatedPRs.length + mergedPRs.length + issues.length;
    return { repo, updatedPRs, mergedPRs, issues, total };
  } catch(e) {
    return { repo, error: e.message, updatedPRs: [], mergedPRs: [], issues: [], total: 0 };
  }
}

function people(item) {
  const names = new Set();
  if (item.user?.login) names.add(item.user.login);
  if (item.assignees) item.assignees.forEach(a => names.add(a.login));
  return [...names].join(', ');
}

function formatReport(results, date) {
  const lines = [];
  lines.push(`📊 cashubtc · ${date}`);
  lines.push('');

  let hasActivity = false;

  const repoSummaries = results
    .filter(r => !r.error && r.total > 0)
    .map(r => `${r.repo} (${r.total})`);

  if (repoSummaries.length > 0) {
    lines.push(`Summary: ${repoSummaries.join(', ')}`);
    lines.push('');
  }

  for (const r of results) {
    if (r.error || r.total === 0) continue;
    hasActivity = true;
    lines.push(`**${r.repo}** (${r.total})`);

    if (r.updatedPRs.length > 0) {
      lines.push('');
      lines.push(`  🔄 updated PRs (${r.updatedPRs.length}):`);
      for (const pr of r.updatedPRs) {
        const draft = pr.draft ? ' [draft]' : '';
        const title = pr.title.slice(0, 60) + (pr.title.length > 60 ? '…' : '');
        lines.push(`    **PR #${pr.number}${draft} ${title}** — ${people(pr)}`);
      }
    }

    if (r.mergedPRs.length > 0) {
      lines.push('');
      lines.push(`  ✅ merged PRs (${r.mergedPRs.length}):`);
      for (const pr of r.mergedPRs) {
        const title = pr.title.slice(0, 60) + (pr.title.length > 60 ? '…' : '');
        lines.push(`    **PR #${pr.number} ${title}** — ${people(pr)}`);
      }
    }

    if (r.issues.length > 0) {
      lines.push('');
      lines.push(`  🐛 issues (${r.issues.length}):`);
      for (const issue of r.issues) {
        const title = issue.title.slice(0, 60) + (issue.title.length > 60 ? '…' : '');
        lines.push(`    **#${issue.number} ${title}** — ${people(issue)}`);
      }
    }

    lines.push('');
  }

  if (!hasActivity) lines.push('No activity in the last 24 hours.');

  const errors = results.filter(r => r.error);
  if (errors.length > 0) {
    lines.push('');
    lines.push('⚠️  Repo fetch errors:');
    for (const e of errors) lines.push(`  - ${e.repo}: ${e.error}`);
  }
  return lines.join('\n');
}

async function sendMessage(channel, target, message) {
  return new Promise((resolve) => {
    const args = ['message', 'send', '--channel', channel, '--target', target, '--message', message, '--json'];
    execFile('openclaw', args, { timeout: 30000 }, (err, stdout, stderr) => {
      if (err) resolve({ error: err.message, stderr });
      else {
        try { resolve(JSON.parse(stdout)); }
        catch(e) { resolve({ raw: stdout }); }
      }
    });
  });
}

async function main() {
  const date = new Date().toUTCString().replace(/ \d{2}:\d{2}:\d{2} GMT$/, ' UTC');
  console.log(`Running cashu report for ${date}`);
  console.log(`Tracked repos: ${REPOS.join(', ')}`);
  console.log(`Window: last ${SINCE_HOURS}h`);
  if (DRY_RUN) console.log('[dry-run] messages will NOT be sent\n');
  else console.log(`[send] dm=${SEND_DM} group=${SEND_GROUP}\n`);

  if (SEND_DM && !TELEGRAM_DM) {
    console.error('--send-dm was passed but CASHU_REPORT_TG_TARGET is not set.');
    process.exit(1);
  }

  const results = await Promise.all(REPOS.map(getRepoActivity));
  const report = formatReport(results, date);

  console.log(report);

  if (DRY_RUN) {
    console.log('\n[dry-run] done — skipping send');
    return;
  }

  if (SEND_DM) {
    const dmResult = await sendMessage('telegram', TELEGRAM_DM, report);
    console.log('DM sent:', JSON.stringify(dmResult));
  }

  if (SEND_GROUP) {
    console.log('Group send skipped: no group target configured on this deployment.');
  }
}

main().catch(err => {
  console.error('Report failed:', err);
  process.exit(1);
});
