import React, { useReducer } from 'react';
import uuid from 'uuid';
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
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
