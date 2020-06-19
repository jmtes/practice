import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

// From here you COULD just return an object to the reducer like you do with the context API, but we want to make an async call to our backend here.
// This is where Redux Thunk comes in!
// Thunk allows us to return a function rather than an object.
// The function is passed a dispatch method that we can use to dispatch to our reducer at any time.
// This means we can query our backend, wait for the response, and THEN dispatch to the reducer.

// ONE WAY TO DO IT:
// export const getLogs = () => {
// return async (dispatch, getState) => {
//   // getState is optional.
//   setLoading();
//   const res = await fetch('/logs');
//   const data = await res.json();
//   dispatch({
//     type: GET_LOGS,
//     payload: data
//   });
// };
// };

// ANOTHER WAY TO DO IT:
// You're simply making the arrow function return an asynchronous arrow function that takes a parameter `dispatch`.
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Add new log
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
