import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  // When you have a form in React, you're usually going to want to attach state to the input.
  // Form input state should always be at the component level!
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();

    if (this.state.text !== '') {
      // Here we're sending the search query back up to the App component!
      this.props.searchUsers(this.state.text);

      this.setState({ text: '' });
    } else {
      this.props.setAlert('Please enter something.', 'light');
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

export default Search;
