import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'juno';
    const loading = false;
    const showName = true;

    return (
      <div className='App'>
        <h1>where learning react. where MAKING THIS HAPEN</h1>

        {/* You can do something similar to ES6 template literals like so: */}
        <h2>hello {name}!</h2>

        {/* Conditionals */}
        {loading ? <h4>loading...</h4> : <h4>content loaded!</h4>}

        {/* You can use a double ampersand in the case that you want to do something if some value is true, but nothing otherwise: */}
        {!loading && <h4>content is still loaded</h4>}
      </div>

      // Example of a return using a Fragment
      // <Fragment>
      //   <h1>where learning react. where MAKING THIS HAPEN</h1>
      // </Fragment>
    );
  }
}

export default App;
