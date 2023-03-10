# Assignment
Trial run with sveltekit, a little demo from a work assignment (see commits).
Sveltekit has some neat features and a nice full stack environment for the right scope of project.

I am/was a bit skeptical to use a complied superset of TypeScript though it's not too invasive.
I do not generally agree with that approach but it was a pleasant enough dev experience.

Some Pros 'n Cons:

[P] Single language codebase is nice for the right project scope

[P] TypeScript positive

[C] Single monolithic project could prove tricky to manage at scale

[~] File-first structure is a ittle file-verbose but it does give some implicit organization

[C]Still young and the docs and community need time to develop

[P] Nice two-way data cascading between children and parents

[P] Easy to use component props and emits

[P] Page - component structure encourages decoupled and re-uable components

[P] Quick route management, for both pages and API

[C] Despite single codebase, typing isn't all too fluid from server to client

[P] Fairly clean and succinct syntax (beats React and Vue 2 though not so much with Vue 3 + Pinia)

  [C] However inline html conditionals aren't the best
  
[P] SSR/Static rendering is fairly straightforward


## Setup

Relevant npm tasks

```bash
# install dependencies
npm ci

# run server in development mode
npm run dev

# run tests
npm run test

npm run lint

npm run format
```
.
