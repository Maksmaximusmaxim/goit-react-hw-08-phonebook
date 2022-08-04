import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {onChangeFilter} from 'components/redux/store'
export const Filter = () => {
  
  const dispatch = useDispatch();
  const selector = useSelector(state => state.filter);
  return (
    <label>
      Найти контакт <input type="text" value={selector} onChange={(e)=>dispatch(onChangeFilter(e.target.value))} />
    </label>
  );
};

