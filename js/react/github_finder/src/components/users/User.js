import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ repos, getUserRepos, match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user } = githubContext;

  // useEffect is used to mimic life cycle methods in function components.
  // The first param is a function containing the code you want to run.
  // The second param is a list of values. If any of the values changes, the code in the function is run again.
  // If the second param is omitted, the effect is fired after every completed render.
  // In this case, you would just indefinitely query the Github API and you don't want that!
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);

    // getUser and getUserRepos never change in our code, but you get a warning because you didn't include them in the dependencies array in the second param.
    // In cases like these where you really don't need to include a dependency, you can disable the warning like so:
    // eslint-disable-next-line
  }, [match.params.login]);

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
    hireable,
    company
  } = user;

  // When props.getUser() is called, the App component state is changed because loading is set to true.
  // I'm guessing this sort of trickles down to every component that loading is passed as a prop to?
  // Anyway, any time a state or prop change happens, this render() function is called.
  // Which is why you can have a conditional set here to watch out for changes in the value of loading and it will re-render automatically!
  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt={`${login} avatar`}
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
          <p>
            Hireable:{' '}
            {hireable ? (
              <i className='fas fa-check text-success'></i>
            ) : (
              <i className='fas fa-times-circle text-danger'></i>
            )}
          </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  <a href={`http://${blog}`}>{blog}</a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Folowing: {following}</div>
        <div className='badge badge-danger'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>

      <h2>Latest Repos</h2>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool,
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired
};

export default User;
