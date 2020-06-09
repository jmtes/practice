import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  // Life cycle method that runs after the first time render() is called in a component and the DOM gets updated as a result.
  // Mounting refers to the actual addition of the DOM elements created by the React component into the DOM.
  // This method is where you'd want to make HTTP requests to query external APIs!
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  // This method is invoked every time rerendering happens in a component. It may happen through a state change or a prop change. Rendering returns the elements to be mounted in the DOM.

  return (
    <GithubState>
      <AlertState>
        {/* The Router component wraps the main app routing. It will be the parent
      of all of our Route components. */}
        <Router>
          {/* All child routes must be wrapped in a div since each React component can only have one child component. */}
          <div className='App'>
            <Navbar title='Github Finder' />
            <div className='container'>
              <Alert />
              {/* The Switch component will only render the first route that matches/includes the path! It's very handy for nested components! */}
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
  // The main difference between mounting and rendering is that mounting happens once, but rendering can happen any number of times!

  // Rendering can be thought of as preparing a parcel for delivery, while mounting can be thought of actually delivering the parcel on a doorstep.
};

export default App;
