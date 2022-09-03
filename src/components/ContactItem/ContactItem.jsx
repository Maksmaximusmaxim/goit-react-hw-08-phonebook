import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactItem/ContactItem.module.css'
export const ContactItem = ({ id, name, number,onDelete }) => {

  
  return (
    <li className={css.li}>
      {name} : {number}
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
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
