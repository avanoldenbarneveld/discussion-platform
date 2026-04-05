# Current focus and backlog

## Related documents

- [README](../README.md)
- [product spec](../PRODUCT_SPEC.md)
- [project operating system](./project-operating-system.md)
- [decision log](./decision-log.md)

## Purpose

This document tracks what deserves attention now, what is likely to come next, and what can wait.

It is not a full roadmap. It is a working view of current priorities.

## Current state

Right now the project is still a mocked frontend with fake data.

What exists in some form:

- a front page
- post links that lead to a comments page
- placeholder login and submit actions
- a mocked main navigation
- an early browsing structure for posts and comments

What does not exist yet in a real way:

- a live backend
- real authentication
- a real submission flow
- real pagination
- a settled data model
- final decisions on several product boundaries and behaviors

So the project is still in a shaping phase. It is not in an implementation-at-scale phase yet.

## Now

### Current focus

The current focus is to shape the core product surface until the main structure feels clear enough to stop guessing.

This does not mean "finish the whole frontend." It means getting the MVP surface into a state where the data model and the main flows start to reveal themselves.

### What that means right now

- make the front page feel cleaner and easier to read
- decide what belongs on the front page and what does not
- clarify which core actions exist in the MVP
- settle how pagination should work in the first version
- clarify the role of comments in the main experience
- decide how minimal profiles should be
- think through how posts, links, and archives should behave conceptually

### What this phase should produce

By the end of the current focus, the project should have:

- a clearer front-page structure
- clearer MVP boundaries
- a more stable implied data model
- enough confidence to define the first real vertical slice

## Next

Once the mocked product surface feels coherent enough, the next step should be the first real vertical slice.

That slice is:

- list posts on the front page
- open a comments page for a post
- support pagination
- support the real data structure needed for those views

That is a better next step than trying to build a full backend for everything at once.

The backend should follow a stable enough understanding of the core entities and flows, not an unfinished collection of mocked screens.

Likely work in this phase:

- formalize the first version of the data model
- define the key entities and relationships
- define what the frontend actually needs from the backend
- implement a small backend that can serve the first slice

## Later

These things matter, but they should not compete with the current focus yet:

- authentication beyond placeholders
- the real submit flow
- invitation mechanics
- moderation tooling
- karma behavior
- reporting flows
- profile depth and profile editing
- ranking details beyond a basic MVP approach
- archive behavior in more depth
- broader navigation expansion

## Pending decisions

These are not blocked forever, but they are not settled yet either:

- the exact invite rollout after the initial admin-led phase
- the final rate limits for new users
- how strict the first trust barriers should be
- how much profile surface actually belongs in the MVP

## Current uncertainty

Open questions still affecting prioritization:

- when the mocked frontend is clear enough to stop shaping and start building the first real slice
- what the first stable data model should look like
- which product decisions have to be made before backend work starts
- how much of the navigation and profile surface actually belongs in the MVP

## Working interpretation

The current job is not to keep adding more mocked surfaces.

The current job is to use the mocked frontend to discover the real shape of the MVP.

Once that shape is clear enough, the next move is not "build the whole backend." The next move is to build one real end-to-end slice that forces the product structure to become concrete.
