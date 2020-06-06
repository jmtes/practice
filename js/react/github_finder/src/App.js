import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/users/Search';
import Users from './components/users/Users';

class App extends Component {
  state = {
    users: [],
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

  // Clear users
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  // This method is invoked every time rerendering happens in a component. It may happen through a state change or a prop change. Rendering returns the elements to be mounted in the DOM.
  render() {
    const { users, loading, alert } = this.state;

    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <div className='container'>
          <Alert alert={alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }

  // The main difference between mounting and rendering is that mounting happens once, but rendering can happen any number of times!

  // Rendering can be thought of as preparing a parcel for delivery, while mounting can be thought of actually delivering the parcel on a doorstep.
}

export default App;
