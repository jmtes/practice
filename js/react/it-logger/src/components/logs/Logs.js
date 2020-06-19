import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

import { getLogs } from '../../actions/logActions';

// In this line you're pulling `logs` and `loading` from the `log` property of the object you return from MapStateToProps at the bottom of the file.
export const Logs = ({ log: { logs, loading }, getLogs }) => {
  // You don't need these anymore:
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  // You want all of your AJAX calls to come from your actions and not within the component.
  // Separation of concerns: your component should just be the output of the state and any actions you may have called.
  // You don't need this anymore because you're doing all this from your actions.
  // const getLogs = async () => {
  //   const res = await fetch('/logs');
  //   const data = await res.json();

  //   setLogs(data);
  //   setLoading(false);
  // };

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show.</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

// The first parameter to connect() should be a map state to props.
// If you want to get anything from your app level state into a component you have to bring it in as a prop.

const mapStateToProps = state => ({
  // `log` is simply the name of the prop. You can call it whatever you want.
  // `state` here refers to the object you passed to combineReducers() in the root reducer.
  log: state.log
});

// The second parameter should be an object containing any actions you're going to perform. In this case, it's just getLogs().
// getLogs() and any other action you include is going to be passed in as a prop as well, so just destructure them in your arrow function parameters to avoid having to use the `props.` prefix.
export default connect(mapStateToProps, { getLogs })(Logs);
