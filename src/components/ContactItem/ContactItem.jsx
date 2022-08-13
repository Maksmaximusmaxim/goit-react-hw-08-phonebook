import React from 'react';
import PropTypes from 'prop-types';
export const ContactItem = ({ id, name, number,onDelete }) => {

  
  return (
    <li>
      {name} : {number}
      <button type="button" onClick={() => onDelete(id)}>
        Удалить
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
