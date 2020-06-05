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
* Class components must extend the `Component` class.
* Use the `rce` shortcut in VSCode to quickly make one!
### `render()`
* `render()` is what's called a life cycle method, meaning it runs at a certain point when the component's loaded.
* There are other life cycle methods that you can run at certain points, but `render()` is the one that's actually required.

## JSX
* It looks like HTML but it's actually JS under the hood.
* The main differences are that you use the `className` and `htmlFor` attributes instead of the `class` and `for` attributes respectively.
* There can only be one parent element! Putting any more than that will throw an error.
### Syntax Exmaples
Templating:
'''
<h2>hello {name}!</h2>
'''
Conditionals:
'''
{loading ? <h4>loading...</h4> : <h4>content loaded!</h4>}
'''
Double ampersand for conditionals where you want to do one thing if something is true, but nothing otherwise:
'''
{!loading && <h4>content is still loaded</h4>}
'''
### Fragments
* If you don't want your rendered output to be wrapped in a div, you can choose to wrap it inside a Fragment instead.
* A Fragment will not show up in the DOM. It will be as if you injected all of its children directly into the root element.
Syntax example:
'''
<Fragment>
  <h1>where learning react. where MAKING THIS HAPEN</h1>
</Fragment>
'''

## Props
* Are passed to components for them to use
* Default props can be set for a component.
* Can be type-checked with PropTypes.

## Component State
* Component-level state means that your state is contained within a single component.
### Ways to Add State to a Component
#### Constructor
* A function that runs when the component runs.
* Not recommended unless you're also gonna use the constructor for something else.
#### Object Literal Inside Class
* This is the recommended way to do it!
* Use destructuring so that you don't have to keep typing `this.state`!
### Stateless Components
* Traditionally, before hooks, functional components were used for stateless components.
* Basically, if your component neither has a state nor uses life cycle methods other than `render()`, it has no reason to be a class!
