import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Josiah Sandoval',
        email: 'josiah@domain.tld',
        phone: '111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Melissa Carr',
        email: 'melissa@domain.tld',
        phone: '222-2222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Laela Russell',
        email: 'laela@domain.tld',
        phone: '333-3333',
        type: 'professional'
      },
      {
        id: 4,
        name: 'Nora Cohen',
        email: 'nora@domain.tld',
        phone: '444-4444',
        type: 'professional'
      }
    ],
    filtered: null,
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  // Delete contact
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
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