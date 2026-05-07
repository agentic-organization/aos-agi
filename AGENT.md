# Organization Intelligence Agent
## High-Density Architecture and System Plan

# 1. Core Objective

Build an evolving organization intelligence agent that continuously observes organizational systems, gathers raw evidence, discovers structure, synthesizes understanding, and maintains a living Markdown-based knowledge system inspired by Andrej Karpathy’s LLM Wiki concept:

https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

The agent’s purpose is to construct and continuously evolve an internal model of the organization:

- Who works with whom
- Who owns what
- Which projects exist
- Which repositories belong to which products
- Which communication channels correspond to which teams/projects
- Who contributes code
- Who makes decisions
- Which systems are active
- Which groups interact frequently
- Which relationships are emerging
- How organizational structure changes over time
- Which skills exist inside the organization
- Which people possess which skills
- Which tools correspond to which skills
- Which teams specialize in which domains

The system is designed as a continuously evolving organizational memory and understanding engine.

The Git repository is not the agent itself.

The Git repository is the persistent organizational memory and evolution log of the agent’s knowledge.

---

# 2. Core Design Philosophy

## 2.1 The Repository Is Organizational Memory

The repository stores:

- Raw evidence
- Derived structured data
- Identity mappings
- Organizational relationships
- Generated tooling
- Synthesized wiki pages
- Historical understanding
- Evolution of knowledge over time
- Skills ontology
- Tool capability mappings

The repository acts as:

- A knowledge substrate
- A provenance system
- A memory graph
- A synchronization layer
- A long-term organizational archive

The actual agent runtime/harness exists externally.

---

# 3. High-Level System Model

The system continuously executes the following cycle:

```text
Observe
→ Ingest
→ Normalize
→ Resolve identities
→ Discover relationships
→ Infer organizational structure
→ Infer skills and capabilities
→ Build/update ontology
→ Synthesize wiki
→ Generate tools if necessary
→ Commit changes
→ Repeat
```

The agent is recursive and evolutionary.

As it learns:
- It creates better categories.
- It discovers new organizational structures.
- It creates new extraction tools.
- It expands schemas.
- It builds richer relationship graphs.
- It improves its own understanding.
- It discovers new skills.
- It learns which tools are associated with which workflows.
- It infers expertise and ownership patterns.

---

# 4. Repository Structure

```text
org-memory/

  README.md

  config/
    sources/
    policies/
    prompts/
    schemas/

  tools/
    ingestion/
    extraction/
    normalization/
    analysis/
    synthesis/
    graph/
    debugging/
    generated/

  data/

    raw/
      slack/
      github/
      gmail/
      telegram/
      filesystem/
      calendar/
      etc/

    normalized/
      entities/
      events/
      messages/
      repositories/
      projects/
      people/
      relationships/
      skills/

    derived/
      embeddings/
      clusters/
      org_structure/
      ownership/
      communication_patterns/
      social_graphs/
      expertise_maps/
      capability_graphs/

    snapshots/

  ontology/
    entity_types/
    relationship_types/
    organizational_patterns/
    taxonomies/
    skills/
    capabilities/

  directory/
    people/
    accounts/
    teams/
    roles/
    identities/
    skills/

  graph/
    entities.json
    relationships.json
    adjacency/
    indexes/

  wiki/
    index.md

    people/
    teams/
    projects/
    repositories/
    products/
    decisions/
    communication/
    systems/
    architecture/
    timelines/
    concepts/
    glossary/
    skills/

  runs/
    ingestion/
    synthesis/
    evaluation/
    reviews/

  logs/

  reports/
```

---

# 5. Core Organizational Understanding Goals

The agent is fundamentally trying to discover organizational structure.

Not merely collect data.

## 5.1 Key Organizational Questions

The system continuously attempts to answer:

### People
- Who are the employees/contributors?
- Who collaborates with whom?
- Who communicates frequently?
- Who owns systems?
- Who leads projects?
- Who is influential?
- Who reviews whose work?
- Who is isolated?
- Which people bridge teams?
- Which skills does each person possess?
- Which tools does each person use regularly?
- Which domains is each person an expert in?

### Teams
- Which teams exist?
- Are teams explicit or implicit?
- Which communication channels correspond to teams?
- Which repositories correspond to teams?
- Which people belong to multiple teams?
- Which teams specialize in which domains?

### Projects
- Which projects exist?
- Which repositories belong together?
- Which systems form one product?
- Which people contribute most?
- Which projects are abandoned?
- Which projects are growing?
- Which capabilities does each project require?

### Communication
- Which channels matter?
- Which people communicate where?
- Which communication clusters exist?
- Which channels map to projects?
- Which groups coordinate frequently?

### Ownership
- Who owns which repositories?
- Who owns infrastructure?
- Who owns operational systems?
- Which ownership is formal vs inferred?

### Skills and Capabilities
- Which skills exist in the organization?
- Which skills are rare?
- Which skills are concentrated?
- Which tools correspond to which skills?
- Which repositories demonstrate which expertise?
- Which people are experts in specific technologies?
- Which teams have capability gaps?
- Which workflows require specialized tooling?

### Organizational Dynamics
- Which teams interact?
- Which systems are coupled?
- Which people are central?
- Which structures are emerging?
- Which projects are splitting or merging?

---

# 6. Skills Directory

The organization maintains a first-class skills and capabilities directory.

Skills are entities.

They evolve over time and connect:
- People
- Teams
- Projects
- Repositories
- Systems
- Workflows
- Tools

## 6.1 Skills Directory Purpose

The skills directory allows the agent to understand:

- Organizational expertise
- Tool specialization
- Technical capabilities
- Domain ownership
- Knowledge concentration
- Skill gaps
- Operational dependencies

---

# 7. Skill Entities

Example:

```yaml
id: skill_kubernetes

name: Kubernetes

category:
  - infrastructure
  - orchestration

related_tools:
  - kubectl
  - helm
  - k9s

related_projects:
  - platform-infra
  - deployment-system

related_repositories:
  - infra/k8s-config
  - deploy/platform

people:
  experts:
    - person_alice
    - person_bob

teams:
  - infrastructure

evidence:
  - deployment activity
  - repository ownership
  - incident participation
  - Slack discussions

confidence: high
```

---

# 8. Skills-to-Tools Relationships

Skills can directly reference operational tools.

Example relationships:

```
skill_kubernetes
  → uses_tool → kubectl

skill_observability
  → uses_tool → grafana

skill_ci_cd
  → uses_tool → github_actions
```

The agent continuously learns:
- Which tools correspond to which skills
- Which workflows imply expertise
- Which people are tool maintainers
- Which tools define organizational capabilities

---

# 9. Skill Discovery

Skills are inferred from evidence.

## 9.1 Signals

Examples:
- Commit activity
- Repository ownership
- Deployment actions
- Slack discussions
- PR reviews
- Incident participation
- Documentation edits
- Tool usage
- Workflow ownership

## 9.2 Example Inference

```
person: person_alice

inferred_skill:
  kubernetes

evidence:
  - authored deployment configs
  - reviewed cluster changes
  - active in #infra
  - participated in outage response

confidence: 0.93
```

---

# 10. Skill Taxonomy Evolution

The agent evolves the skill ontology over time.

Initial categories may include:

```
Infrastructure
Backend
Frontend
Security
DevOps
Data
ML
Operations
Product
Design
```

Over time the agent may discover:

```
Platform Reliability
Knowledge Engineering
Workflow Automation
Incident Coordination
Distributed Systems
LLM Infrastructure
Observability Engineering
```

The ontology continuously expands.

---

# 11. Generated Tooling System

The agent generates and evolves tooling.

## 11.1 Important Clarification

The tools directory contains tools generated or maintained by the agent itself.

These are operational tools used for:
- Fetching data
- Parsing systems
- Transforming data
- Building indexes
- Extracting entities
- Computing relationships
- Updating the wiki
- Running evaluations
- Discovering skills
- Computing expertise graphs

The tools are artifacts of the evolving intelligence system.

## 11.2 Tool Generation Philosophy

As the agent encounters new systems or organizational patterns:
- It generates new extraction tools.
- It builds new parsers.
- It creates new analysis utilities.
- It expands its operational capabilities.
- It builds new skill extraction pipelines.
- It creates new relationship discovery logic.

## 11.3 Example Tool Structure

```
tools/

  ingestion/
    slack_fetch.py
    github_fetch.py
    gmail_fetch.py

  extraction/
    extract_projects.py
    extract_ownership.py
    infer_teams.py
    infer_skills.py

  analysis/
    communication_clusters.py
    relationship_strength.py
    org_mapper.py
    expertise_graph.py

  synthesis/
    build_people_pages.py
    build_project_pages.py
    build_skill_pages.py

  graph/
    compute_centrality.py
    build_relationship_graph.py
    build_capability_graph.py
```

---

# 12. The LLM Wiki System

The wiki is heavily inspired by Karpathy’s LLM Wiki concept.

The wiki is not merely documentation.

It is:
- Agent-readable memory
- Human-readable memory
- Context substrate
- Long-term synthesis layer
- Navigation structure
- Relationship map
- Knowledge compression system

---

# 13. Wiki Design Principles

## 13.1 Dense Interlinking

Pages aggressively link to:
- People
- Teams
- Projects
- Repositories
- Systems
- Decisions
- Channels
- Concepts
- Skills
- Tools

Example:

```
[[people/alice-smith]]
[[projects/payment-platform]]
[[teams/infrastructure]]
[[repositories/infra-deploy]]
[[skills/kubernetes]]
[[tools/kubectl]]
```

---

## 13.2 Small Composable Pages

Pages should be:
- Compact
- Focused
- Highly linkable
- Incrementally updateable

Avoid giant monolithic documents.

---

## 13.3 Incremental Evolution

Pages evolve continuously.

The agent:
- Appends observations
- Refines summaries
- Updates relationships
- Adds newly discovered context
- Preserves historical understanding

---

## 13.4 Wiki as Cognitive Compression

The wiki acts as compressed organizational understanding.

It should:
- Reduce token load
- Surface key relationships
- Preserve important context
- Enable recursive synthesis
- Support future reasoning

---

# 14. Wiki Page Types

## 14.1 People Pages

```
wiki/people/alice-smith.md
```

Contains:
- Roles
- Teams
- Systems owned
- Communication patterns
- Main collaborators
- Repositories
- Project involvement
- Influence areas
- Skills
- Tool usage
- Historical evolution
- Open questions

---

## 14.2 Team Pages

```
wiki/teams/infrastructure.md
```

Contains:
- Members
- Repositories
- Slack channels
- Products owned
- Responsibilities
- Dependencies
- Organizational relationships
- Shared expertise

---

## 14.3 Project Pages

```
wiki/projects/payment-platform.md
```

Contains:
- Goals
- Systems
- Owners
- Contributors
- Communication spaces
- Repositories
- Dependencies
- Risks
- Required capabilities
- Organizational relevance

---

## 14.4 Skill Pages

```
wiki/skills/kubernetes.md
```

Contains:
- Description
- Related tools
- Experts
- Teams using the skill
- Related repositories
- Related systems
- Related workflows
- Organizational importance

---

# 15. Graph Layer

Underneath the wiki is a relationship graph.

## 15.1 Entity Graph

The graph stores:
- Entities
- Relationships
- Confidence
- Evidence
- Temporal evolution

## 15.2 Relationship Example

```
subject: person_alice
predicate: possesses_skill
object: skill_kubernetes

confidence: 0.92

evidence:
  - deployment activity
  - repository ownership
  - cluster incident response
```

---

# 16. Temporal Evolution

The system tracks change over time.

## 16.1 Historical Awareness

The agent should understand:
- Team evolution
- Ownership changes
- Organizational restructuring
- Repository migration
- Communication migration
- Product lifecycle changes
- Skill evolution
- Expertise shifts

---

# 17. Synthesis Pipeline

## 17.1 Pipeline

```
Fetch data
→ Store raw dumps
→ Normalize entities/events
→ Resolve identities
→ Discover relationships
→ Infer organizational structure
→ Infer skills/capabilities
→ Update graph
→ Synthesize wiki
→ Generate/update tools
→ Commit changes
```

---

# 18. Self-Evolution

The system is explicitly self-improving.

The agent should:
- Detect missing categories
- Detect weak schemas
- Create new extraction logic
- Improve relationship discovery
- Introduce better clustering
- Improve ontology richness
- Generate improved tooling
- Expand skill taxonomies
- Discover new organizational patterns

The organization model continuously becomes richer.

---

# 19. Long-Term Vision

The final system becomes:

- A living organizational memory
- A continuously evolving organizational graph
- A self-improving intelligence layer
- A dynamic relationship mapper
- A compressed cognitive substrate for future agents
- A Git-native historical memory system
- A continuously evolving expertise and capability map

The agent is not merely indexing data.

It is constructing an evolving semantic understanding of the organization itself.
