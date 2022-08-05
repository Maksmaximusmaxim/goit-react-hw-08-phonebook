import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import {  useSelector  } from 'react-redux';
export const ContactList = () => {

const selector = useSelector(state => state.contacts.items)

  return (
    <ul>
      {selector.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            
          />
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  dataSubscribers: PropTypes.array.isRequired,
 
};
