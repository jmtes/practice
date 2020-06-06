import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

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

  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // Get a single Github user
  getUser = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };

  // Get user's repos
  getUserRepos = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ repos: res.data, loading: false });
  };

  // Clear users
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  // This method is invoked every time rerendering happens in a component. It may happen through a state change or a prop change. Rendering returns the elements to be mounted in the DOM.
  render() {
    const { users, user, repos, loading, alert } = this.state;

    return (
      // The Router component wraps the main app routing. It will be the parent of all of our Route components.
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
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
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
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
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
    );
  }

  // The main difference between mounting and rendering is that mounting happens once, but rendering can happen any number of times!

  // Rendering can be thought of as preparing a parcel for delivery, while mounting can be thought of actually delivering the parcel on a doorstep.
}

export default App;
