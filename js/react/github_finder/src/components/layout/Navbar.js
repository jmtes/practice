import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // These props are used by default if they're not provided in App.js!
  static defaultProps = {
    title: 'Github',
    icon: 'fab fa-github'
  };

  // This type-checks passed-in props.
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
