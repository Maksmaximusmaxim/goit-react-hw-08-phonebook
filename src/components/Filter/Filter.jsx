import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'components/redux/filter';
export const Filter = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.filter.filter);
  return (
    <label>
      Найти контакт
      <input
        type="text"
        value={selector}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </label>
  );
};
