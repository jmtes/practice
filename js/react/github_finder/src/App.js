import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';

import GithubState from './context/github/GithubState';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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

  // Get a single Github user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  // Get user's repos
  const getUserRepos = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });

    setTimeout(() => setAlert(null), 3000);
  };

  // This method is invoked every time rerendering happens in a component. It may happen through a state change or a prop change. Rendering returns the elements to be mounted in the DOM.

  return (
    <GithubState>
      {/* The Router component wraps the main app routing. It will be the parent
      of all of our Route components. */}
      <Router>
        {/* All child routes must be wrapped in a div since each React component can only have one child component. */}
        <div className='App'>
          <Navbar title='Github Finder' />
          <div className='container'>
            <Alert alert={alert} />
            {/* The Switch component will only render the first route that matches/includes the path! It's very handy for nested components! */}
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      showAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  // We're using the spread operator for props so that the User component has access to Route's props, which include history, location, match, etc.
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
  // The main difference between mounting and rendering is that mounting happens once, but rendering can happen any number of times!

  // Rendering can be thought of as preparing a parcel for delivery, while mounting can be thought of actually delivering the parcel on a doorstep.
};

export default App;
