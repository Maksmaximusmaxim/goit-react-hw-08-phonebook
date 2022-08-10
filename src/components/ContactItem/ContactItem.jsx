import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/slice';
export const ContactItem = ({ id, name, number }) => {
  console.log(id, 'qweqwewqe');
  const dispatch = useDispatch();
  return (
    <li>
      {name} : {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
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
