import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {filterContact} from 'components/redux/store'
export const Filter = () => {
  
  const dispatch = useDispatch();
  const selector = useSelector(state => state.contacts.filter);
  return (
    <label>
      Найти контакт <input type="text" value={selector} onChange={(e)=>dispatch(filterContact(e.target.value))} />
    </label>
  );
};

