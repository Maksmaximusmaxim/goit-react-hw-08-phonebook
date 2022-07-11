import React from 'react';
import PropTypes from 'prop-types';
export const Filter = ({value,onChange})=>{
    console.log(value)
    return (
        <label >
        Найти контакт  <input type="text" value={value} onChange={onChange}/>
        </label>
    )
}
Filter.propTypes = {
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}
