import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filter';
import css from 'components/Filter/Filter.module.css'
export const Filter = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.filter.filter);
  return (
    <section>
          <label className={css.label}>
      Найти контакт
      <input
      className={css.input}
        type="text"
        value={selector}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </label>
    </section>

  );
};
