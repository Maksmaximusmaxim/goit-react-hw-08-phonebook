import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
export const ContactList = ({ dataSubscribers , onClick }) => {

console.log(dataSubscribers)
console.log(dataSubscribers)
console.log(dataSubscribers)
  return (
    <ul>
      {dataSubscribers.map(({ id,  name, number  }) => {
        
        return (
          <ContactItem id={id} name={name} number={number} onClick={onClick} />
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  dataSubscribers: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
