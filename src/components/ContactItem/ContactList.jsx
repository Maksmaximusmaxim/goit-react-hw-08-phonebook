import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
export const ContactList = ({ dataSubscribers, onClick }) => {
  return (
    <ul>
      {dataSubscribers.map(({ id, data: { name, number } }) => {
        console.log(id);
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
