import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
export const ContactList = ({ dataSubscribers, onClick }) => {
  console.log(dataSubscribers, 'qweqweqe');

  return (
    <ul>
      {dataSubscribers.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  dataSubscribers: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
