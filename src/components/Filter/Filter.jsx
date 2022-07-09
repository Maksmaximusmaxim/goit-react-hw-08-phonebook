import React from 'react';
export const Filter = ({value,onChange})=>{
    return (
        <label >
        Найти контакт  <input type="text" value={value} onChange={onChange}/>
        </label>
    )
}