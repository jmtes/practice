import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    filtered: null,
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };

  // Clear contacts
  const clearContacts = () => dispatch({ type: CLEAR_CONTACTS });

  // Add contact
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      // We're not including the x-auth-token header here because we set it up to include it globally in setAuthToken!
      const res = await axios.post('api/contacts', contact, config);

      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };

  // Delete contact
  const deleteContact = async id => {
    try {
      await axios.delete(`api/contacts/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };

  // Set current contact
  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  // Update contact
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };

  // Filter contacts
  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        filtered: state.filtered,
        current: state.current,
        error: state.error,
        getContacts,
        clearContacts,
        addContact,
        deleteContact,
        updateContact,
        filterContacts,
        clearFilter,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
