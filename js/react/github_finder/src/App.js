import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // Life cycle method that runs after the first time render() is called in a component and the DOM gets updated as a result.
  // Mounting refers to the actual addition of the DOM elements created by the React component into the DOM.
  // This method is where you'd want to make HTTP requests to query external APIs!
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }

  // This method is invoked every time rerendering happens in a component. It may happen through a state change or a prop change. Rendering returns the elements to be mounted in the DOM.
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }

  // The main difference between mounting and rendering is that mounting happens once, but rendering can happen any number of times!

  // Rendering can be thought of as preparing a parcel for delivery, while mounting can be thought of actually delivering the parcel on a doorstep.
}

export default App;
