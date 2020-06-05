import React from 'react';
import PropTypes from 'prop-types';

/* CLASS COMPONENT SYNTAX
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
*/

// FUNCTIONAL COMPONENT SYNTAX

// In the params, we deconstruct icon and title from props.
const Navbar = ({ icon, title }) => {
  // Rather than go inside Navbar like they do in the class syntax, defaultProps and propTypes go outside of it.

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};

// These props are used by default if they're not provided in App.js!
Navbar.defaultProps = {
  title: 'Github',
  icon: 'fab fa-github'
};

// This type-checks passed-in props.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
