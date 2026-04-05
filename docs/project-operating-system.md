# Project operating system

## Purpose

This document explains how the project is run.

It exists to reduce improvisation, make priorities visible, and keep product decisions, active work, and process rules easy to follow.

This is not an aspirational process document. It describes the minimum real working system for the project as it exists today.

## Nature of this document

This document is internal but public.

It is written first to help run the project well, but it should also be clear enough for other people to understand how the project is being approached.

## Current stage of the project

The project is still early.

The product direction is fairly clear, but a lot of implementation details are still moving. Core flows, data structures, and boundaries are still being shaped.

That matters because, at this stage, small focused pieces of work are more useful than detailed long-range planning.

## Source of truth

### Product direction

Product direction lives mainly in:

- `README.md`
- `PRODUCT_SPEC.md`

### Process

This document defines the current working model.

### Decisions

Important decisions should be written down in the decision log.

That log lives in:

- [decision log](./decision-log.md)

### Active priorities

Current and upcoming priorities should be tracked in a simple backlog.

That backlog lives in:

- [backlog](./backlog.md)

## Working model

The project uses a light version of Shape Up.

That does not mean fixed cycles or hard deadlines. The point is not to force the work into a calendar. The point is to keep the work shaped enough that it can move forward clearly, even when available time changes.

This project should be run by focus, not by deadline.

### Core rules

- there is always one current focus
- there is only one main active piece of work at a time
- priorities are organized as Now / Next / Later
- new ideas can be captured at any time, but they should not interrupt the current focus unless they clearly matter more

## Priority structure

### Now

What is being worked on now, or what is clearly next.

### Next

What is likely to come after the current focus.

### Later

Ideas, improvements, and possible future work that should stay visible without competing for attention now.

The point of this structure is not perfect planning. It is to preserve focus and reduce context switching.

## Shaping work

Before starting a meaningful piece of work, there should be enough clarity to know what is being done and what is not.

That does not require a heavy process. In most cases, a short written note is enough.

At minimum, it should be clear:

- what problem is being solved
- why it matters now
- what is in scope
- what is out of scope
- what would count as a good outcome
- what still feels uncertain

The point is not to write mini-specs for everything. It is to avoid drifting into vague work.

## Definition of done

Work should only be considered done when it is genuinely ready to stay in the main codebase.

For now, the minimum bar is:

- the intended goal has actually been met
- the change is understandable and consistent with the project
- the change does not knowingly break existing behavior
- obvious broken states have been considered
- the relevant product decision is documented or linked when needed

This bar should tighten over time as the project matures.

## Decision logging

Important decisions should be recorded so they do not have to be reopened over and over.

Typical examples include:

- URL structure
- naming conventions
- data model choices
- ranking or voting behavior
- identity rules
- moderation boundaries
- what belongs in the MVP and what does not

Each entry should capture:

- date
- decision
- context
- rationale
- consequences

## Repo vs GitHub

### What belongs in the repo

Stable project knowledge belongs in the repository.

Examples:

- `README.md`
- `PRODUCT_SPEC.md`
- this document
- decision logs
- architecture notes worth keeping
- durable process documents

### What belongs in GitHub

GitHub may be useful later for execution tracking, but the project should not depend on it to function.

For now, the project stays Markdown-first.

That means:

- core knowledge lives in the repo
- the process should not depend on GitHub Issues or Projects
- GitHub can be added later if execution tracking becomes a real need

## Review rhythm

The project should be reviewed regularly, roughly once a week when possible.

The review does not need to be formal. It is just a short check on direction.

Useful questions:

- What moved forward?
- What actually got finished?
- What got stuck?
- What changed?
- What should become the next focus?

## Principles

These principles should guide day-to-day work:

- keep the process lightweight
- prefer clarity over formality
- protect focus
- finish small, meaningful pieces
- write down decisions that would otherwise be forgotten
- avoid building a fake system that looks professional but is not actually used

## File location

This document lives at:

`/docs/project-operating-system.md`

It can be linked from the README for visibility.
