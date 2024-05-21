# NextJS Challenge - Seven Sigma Group

This repository contains a typical NextJS project at Seven Sigma Group.

This is a [Next.js](https://nextjs.org/) project configured with:

1. ESLint and Prettier
2. NextJS and React specific folders (`pages`, `styles`, and `layouts`)
3. TypeScript
4. Tailwind CSS
Prisma and Docker-Compose with PostgreSQL (only for backend tasks, details below)

## Project structure

The app has the following structure:

- `components`: React components used across the app.
- `pages`: NextJS specific pages. The pages should not contain any styles, and be limited to the page-specific logic.
  All the presentation and business logic should be implemented as a view.
- `layouts`: Contains the presentation elements for the pages. Can also include data and business logic.
- `utils`: Helper functions. There can be 3 sub-folders:
  - `client`: for client-side utils.
  - `server`: for server-side only.
  - `common`: for both. Typically only types.

### API

You have a NextJS API route available that you can call to fetch all the details.

You can see the code at `src/pages/api/person`

TL;DR:
- GET endpoint: `api/user?person={Person.PersonA}`
- Can request values for person A, person B, or person C.
- Person A returns in one second, person B returns in 3 seconds, person C always fails.


## Prerequisites

To set up the codebase and the required dependencies, simply run `npm install`;

If you're only doing the frontend tasks, that's all you need.


## Task details

Task 1

Add functionality to the buttons, such that:
- Initially, none of them are selected.
- When clicked, it gets selected.
- When the first one is selected, it can only be unselected by selecting another one.

Task 2
- When the button is pressed, call the API at `api/person?person={Person.PersonA}` to get user details.
 The API has this features:
 - Can request values for person A, person B, or person C.
 - Person A returns in one second, person B returns in 3 seconds, person C always fails.
 - Account for the following cases:
 - Loading state
 - Changing the request before the previous one have resolved
 - Success and error

 Task 3 
 - As the request loads, show a skeleton loading components.
 - If the request is successful, show a card to display the user information.
 - If the request fails, show an error message instead of the card.

 Task 4
 Wrap the app in a [React Context](https://react.dev/reference/react/createContext) that contains a boolean state to enable/disable logs.
 The context should contain and make accessible to the entire app the following:

 - `enableLogs`: boolean
 - A callback to toggle between states.

Task 5 

Add a state somewhere in the tree (layout file or one of the components) with the current date and time (`currentTime`), and update it every second. Show this time somewhere in the UI, formatted as `DD-MM-YYYY : hh:mm:ss`.

You’re not allowed to use 3rd party libraries to implement this, besides React (and of course JS).
You’re not allowed to use 3rd party libraries to implement this, besides React (and of course JS).

Task 6

Implement a custom hook that does the following:
-  When the value of the state holding the person details changes, if `enableLogs` is `true`, console log the person details, and the current value of the `currentTime` state.
