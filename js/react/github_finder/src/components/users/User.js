import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    // This supplies the value of :login from the route path, which should be the Github user's username, to getUser.
    console.log(this.props);
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default User;
