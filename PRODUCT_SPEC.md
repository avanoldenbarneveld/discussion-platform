# MVP brief

## Related documents

- [README.md](./README.md)
- [docs/project-operating-system.md](./docs/project-operating-system.md)
- [docs/backlog.md](./docs/backlog.md)
- [docs/decision-log.md](./docs/decision-log.md)

## What we are building

La Portada Tech is an invite-only link and discussion community for the Spanish tech scene.

The closest references are Lobsters and Reddit, but adapted to Spain and built with a stronger bias toward quality. The goal is not to build another generic social network or a LinkedIn clone. It should feel like a place where experienced people in tech come to read and discuss things that are actually worth their time.

## Who it is for

The main audience is people with real experience in tech:

- software engineers
- product engineers
- product managers
- CTOs
- technical founders
- product designers with a technical background

Other people from the ecosystem can take part too, but they should not define the tone of the product:

- recruiters
- sales profiles
- other tech-adjacent roles

The reference point is not "people interested in technology." It is "people already working in the sector who have some judgment." That distinction matters because the tone of the community comes from it.

## Positioning

This is a product built first and foremost for Spain.

The interface and the discussion should be in Spanish. Linked content can be in Spanish or English, as long as it is relevant to people working in tech in Spain and framed for that audience. If everything had to be in Spanish, too much of the best material would be excluded. If the product drifts into English, it loses its identity. The balance matters.

We are not trying to build:

- a LinkedIn clone
- a global English-speaking community
- a general forum for all of Latin America
- a subreddit system

What we want is a curated public square for the tech community in Spain. A place with some judgment, some context, and a clear quality bar.

## Core product idea

At the beginning, there is only one front page.

No subcommunities. No tags. No weird extra sections. One main surface where attention and discussion are concentrated. If the product gets fragmented too early, the community loses density and never really develops a shared culture.

The front page should feel sharp. Not perfect, and not elitist in the worst sense, but clearly better than a random feed. People should notice the difference as soon as they land on it.

## Core loop

The MVP loop is simple:

1. A user shares a link.
2. They can add optional text to explain why it matters or to start the discussion.
3. Other users vote and comment.
4. The best things rise.
5. Moderation keeps the level up.
6. Karma accumulates as reputation.
7. Invites control growth.

That is the heart of the product. Everything else is secondary for now. If this loop does not work, the rest does not matter.

## What can be posted

At launch, the format is:

- `link + optional text`

That text is not there to duplicate the article or do SEO. It is there to add context, explain why the link matters, or push the discussion in a better direction from the start. Posting should mean contributing something, not just dropping a URL.

Text-only posts can come later. Images are not a priority right now.

## Basic data model

For the MVP, this is enough:

- users
- invites
- posts
- comments
- votes
- karma
- reports

Nothing more is needed at the start. Extra structure at this stage would mostly be noise.

## Voting and karma

The MVP launches with:

- upvotes only

There are no downvotes at first.

The reason is practical. Upvotes are enough to surface good content, and they avoid some of the reactive, toxic behavior that tends to appear very early once downvotes exist. If something is not interesting, it can simply stay low. Not every disagreement needs to become a punishment.

For now, karma is only reputation. It does not unlock anything. There are no special privileges, no extra product mechanics, and no gamified reward layer on top. It is just a simple signal that someone has been around and that the community has responded well to what they contribute.

## Identity and profiles

Public identity is username-based.

There should be no pressure toward real names. If someone wants to use one, fine, but it should not be the default expectation. This is not meant to be a professional business card.

Profiles should include:

- username
- karma
- optional bio
- optional links
- who invited you

Bio and links are context, not a CV. Invite lineage adds some accountability without turning the whole thing into bureaucracy. The goal is enough identity to build trust, not enough identity to encourage posturing.

## Invites and growth

The product grows through invites.

The rollout should look like this:

1. At first, only admins can invite.
2. Once there is a solid initial group, selected trusted users get 3 invites each.
3. Later, that can expand gradually.

It does not make sense to give invites to everyone from day one. First the culture needs to exist in a recognizable way. Otherwise the community gets diluted before it even starts. First the tone gets established, then growth opens up.

## Initial permissions and limits

Invited users can post and comment from the start.

That said, new users should still have cooldowns. The point is not to punish them. The point is to add reasonable friction against spam and low-effort participation. Posting should stay easy, but not culturally free.

Recommended initial limits:

- 1 post every 12 hours
- 5 comments per hour

Later on, these limits can relax based on karma, account age, or manual trust.

## Feed and ranking

The product has one main front page feed.

Sorting options:

- `hot`
- `new`
- `top today`

The default should be `hot`.

`new` is too noisy as the main view. `top today` arrives too late. `hot` is the reasonable middle ground between freshness and signal.

## Comments

Comments matter as much as the links.

We need:

- threaded comments
- collapsible comments

A large part of the product's value depends on the discussion being worth reading even when the link itself is not enough. If the conversation does not elevate the content, the product only does half its job.

## Moderation

Moderation has to be quality-oriented.

Removing spam is not enough. If the product is going to have a clear identity, moderation has to intervene when the level drops, when conversations get repetitive, or when the site fills up with content that technically fits but does not really add much.

The guiding question should be:

> Is this worth a conversation among experienced people in the field?

If the answer is usually no, it does not belong. Holding that line is a core part of the product, not an operational detail.

Moderation should optimize for:

- signal
- relevance
- civility
- low repetition
- low promotional junk

## Reports

Users can report:

- posts
- comments

Reports go to moderators. They do not need to become a public mechanic.

## Self-promotion and commercial profiles

Commercial profiles are not banned. Recruiters are not banned either.

What should be discouraged is extractive behavior. There is a difference between participating as a normal member of the community and showing up only to get something out of it.

Initial self-promotion rule:

- allowed
- must be clearly disclosed
- must not be repetitive
- must not be spammy
- moderators can remove it if it adds little signal

The MVP does not need a special system for this. A clear rule and consistent moderation are enough. The priority is not to make the rule elaborate. The priority is to make it real.

## Jobs and hiring

Job-related posts can exist in the MVP if they are good and relevant.

There is no need to split hiring into a separate product yet. There is also no need to think about dedicated monetization for it yet. If the community works, there will be time to build something around that later. Right now the priority is that the site is valuable on its own.

## What the product should feel like

The product should feel like a curated tech public square.

Not a corporate forum. Not an ultra-niche nerd enclave. Not just another Reddit clone.

There should be room for technical depth, product thinking, startups, and industry news, as long as the level stays high and the discussion is worth following. The point is not just to gather people from the sector. The point is to create a place they want to come back to because the conversation is better here.

## What we are not doing now

Out of scope for the MVP:

- subreddits or topic communities
- tags
- downvotes
- private messages
- complex profiles
- image-first posting
- special recruiter flows
- karma-unlocked features
- broader social-network mechanics

The first version needs to stay narrow and legible. The clearer the focus is at the start, the easier it becomes to protect the culture later.
