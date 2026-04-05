# Decision log

## Purpose

This document records decisions that are settled enough to matter later.

The bar is simple: if changing the decision later would create real rework, change the structure of the project, or reopen an important constraint, it belongs here.

If a decision is obvious from the product spec, still in motion, or too small to matter, it does not need to be here.

## Entries

### DL-001

**Date:** 2026-04-05  
**Decision:** Project documentation is written in English.  
**Why it matters:** The repo is public-facing, and changing this later would affect the whole documentation layer.

### DL-002

**Date:** 2026-04-05  
**Decision:** Process and project-working documents live under `/docs`.  
**Why it matters:** This fixes where durable working documentation belongs and keeps the repository root from turning into a dumping ground.

### DL-003

**Date:** 2026-04-05  
**Decision:** The project is Markdown-first for now.  
**Why it matters:** Core knowledge and active planning live in the repo. The project does not depend on GitHub Issues or Projects at this stage.

### DL-004

**Date:** 2026-04-05  
**Decision:** Work is organized by focus, not by fixed-length cycles.  
**Why it matters:** This affects how priorities are shaped and reviewed. It also rules out sprint-style planning as the default model.

### DL-005

**Date:** 2026-04-05  
**Decision:** Discussion URLs use `/comments/:publicId/:slug`.  
**Why it matters:** This sets the public route shape for the core reading flow and affects routing, linking, and backend lookup.

### DL-006

**Date:** 2026-04-05  
**Decision:** Public story URLs use random-looking public IDs rather than sequential IDs.  
**Why it matters:** This separates public identity from internal IDs and avoids exposing internal post counts.

### DL-007

**Date:** 2026-04-05  
**Decision:** The code is licensed under `AGPL-3.0-only`, while the project name and brand remain reserved.  
**Why it matters:** This affects reuse, hosting, and the long-term boundary between open code and protected brand identity.
