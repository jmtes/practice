import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchLogs } from '../../actions/logActions';

export const SearchBar = ({ searchLogs }) => {
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              onChange={e => searchLogs(e.target.value)}
              placeholder='Search logs'
              required
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
