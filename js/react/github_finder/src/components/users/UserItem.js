import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* CLASS COMPONENT SYNTAX
export class UserItem extends Component {
  // Adding state with a constructor:
  // constructor() {
  //   super();
  //   this.state = {
  //     id: 'id',
  //     login: 'jmtes',
  //     avatar_url:
  //       'https://avatars0.githubusercontent.com/u/38450133?s=460&u=af94eac6b797e120db1222fadee70a951efcdeee&v=4',
  //     html_url: 'https://github.com/jmtes'
  //   };
  // }

  // Adding state with an object literal:
  // state = {
  //   id: this.props.user.id,
  //   login: this.props.user.login,
  //   avatar_url: this.props.user.avatar_url,
  //   html_url: this.props.user.html_url
  // };

  // We don't really need a state because we're just going to use props.

  render() {
    // Using destructuring so we don't have to keep typing `this.state`:
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}
*/

// FUNCTIONAL COMPONENT SYNTAX

// In the params, we deconstruct login, avatar_url,and html_url from props.user:
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // We don't really need a state because we're just going to use props.

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

// Functional components with hooks cut out a lot of code from the class syntax and look cleaner!

export default UserItem;
