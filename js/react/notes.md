# React Notes

## Create-React-App Boilerplate File Structure

### `package.json`
#### Dependencies
* `react-dom` allows us to render apps within the browser and DOM.
* `react-scripts` is the magic behind `create-react-app`. It handles configuring Webpack and Babel among other things.
#### Scripts
* `start` starts the dev server (on Port 3000 by default)
* `build` generates static assets for deployment.
* `test` runs tests.

### The `public` Directory
#### `index.html`
* React is a Single Page Application framework.
* Everything is routed through the `index.html` file in this directory.
* The body contains a div with an id of "root". It's the app/root component where basically the entire React app is going to output the main app component code.
* Any other component we make, whether it be a navbar or a user list, will get embedded in this main app component.

### The `src` Directory
* Everything having to do with components, state, etc. will go in this directory.
#### `index.js`
* First and foremost, the React library itself is imported.
* `ReactDom` is imported for web applications.
* The main app component `App` is imported from `App.js`.
* ReactDom has a method called `render()` which takes in two params: the component to render and where to render it in the DOM (example: `ReactDom.render(<App />, document.getElementById('root'))`)
#### `App.js`
* Defines the main app component and exports it.

## Deploying a React App Locally
* Once we're ready to deploy, we don't deploy anything in the `src` directory.
* Rather, we deploy the static assets in the `build` directory, which is created when the `build` script is ran.
* The dev server is started up when the `start` script is ran.

## Components
* Components can be functions or classes.
* It used to be that only class components can have a state, but hooks allow functional components to have a state as well.
