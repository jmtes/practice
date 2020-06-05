import React, { Component } from 'react';

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

export default UserItem;
