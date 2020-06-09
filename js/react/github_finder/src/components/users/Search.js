import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showClear, clearUsers, showAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = event => setText(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    if (text !== '') {
      // Here we're sending the search query back up to the App component!
      githubContext.searchUsers(text);

      setText('');
    } else {
      showAlert('Please enter something.', 'light');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default Search;
