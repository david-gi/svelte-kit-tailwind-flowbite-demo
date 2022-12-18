# Assignment

- We're not wondering about how you set up a project.
  We want to see how you work in an existing project.
- We're not expecting you to spend a huge amount of time on this,
  so please don't spend more than a couple of hours.
  We just want to see how you work and have some code to talk about.

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

## Helpful links

[Svelte docs](https://svelte.dev/docs)
[SvelteKit docs](https://kit.svelte.dev/docs)
[Tailwind docs](https://tailwindcss.com/docs)
[Flowbite Svelte docs](https://flowbite-svelte.com/)

## Tasks

Choose some of these, according to your strenghts/interests. You don't need to do all of them.

- There is a failing test in `wordWrap.test.ts` Fix the code that is being tested.
  - Additional tasks:
    - The tests coverage is not great. Add tests for some of the relevant edge cases.
      (You can decide how to handle those edge cases.)

- ### Render the data from `getPokemon` in the `/pokemon` page as a table.
  (see https://kit.svelte.dev/docs/load)
  - Additional tasks:
    - Show a card with some statistics. How many pokemon are there of each type?
    - Make the table sortable by clicking column headers.
    - Make the table filterable.
    #### Interviewee's Comments
      - Assuming `getAllPokemon` was meant
      - Sveltekit did not work as listed in the docs: https://kit.svelte.dev/docs/load
      | - Had to restart VSCode a few times to get the './$types' to resolve
      | - Endpoint access via fetch was the only way I found that worked with page data load

  ------

- There is a modal in the `/modal` page.
  Write down some of the accessability issues with that modal as a comment at
  the top of the `+page.svelte` file.
  - Additional tasks:
    - Fix some of the accessability issues
      (in `src/lib/components/vendor/Modal.svelte` and/or in `+page.svelte`).

- We want to monitor how often the `+error.svelte` page is shown.
  Create an endpoint at `/api/monitoring/error` that logs something to the console,
  then call that endpoint from the browser when the error page is shown.
