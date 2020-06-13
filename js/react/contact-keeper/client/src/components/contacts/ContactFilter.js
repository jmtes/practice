import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filtered, filterContacts, clearFilter } = contactContext;

  // A reference in React is used to reference an actual DOM object.
  // It's an alternative to forms and are useful for simpler ones.

  // They can be used to store a value you would otherwise store in the state in the case that you don't want changes to that value to make the component re-render, which it would do in the state!

  // Here, we're initializing the `value` property of `current` (which should be the attached element) to an empty string:
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = () => {
    // console.log(text.current); // This outputs the input field!
    if (text.current.value !== '') {
      filterContacts(text.current.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type='text'
        // This attaches this input element to the `text` ref and sets it to `text.current`! Now you can access the field value with `text.current.value` like we do in the onChange!
        ref={text}
        placeholder='Filter contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
