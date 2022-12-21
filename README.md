# Assignment
Trial run with sveltekit, a little demo from a work assignment (see commits).
Sveltekit has some neat features and a nice full stack environment for the right scope of project.

I am/was a bit skeptical to use a complied superset of TypeScript though it's not too invasive.
I do not generally agree with that approach but it was a pleasant enough dev experience.

Some Pros 'n Cons (+ ~ -):
+ Single language codebase is nice for the right project scope
+ TypeScript positive
- Single monolithic project could prove tricky to manage at scale
~ File-first structure is a ittle file-verbose but it does give some implicit organization
- Still young and the docs and community need time to develop
+ Nice two-way data cascading between children and parents
+ Easy to use component props and emits
+ Page - component structure encourages decoupled and re-uable components
+ Quick route management, for both pages and API
- Despite single codebase, typing isn't all too fluid from server to client
+ Fairly clean and succinct syntax (beats React and Vue 2 though not so much with Vue 3 + Pinia)
  - However inline html conditionals aren't the best
+ SSR/Static rendering is fairly straightforward

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
