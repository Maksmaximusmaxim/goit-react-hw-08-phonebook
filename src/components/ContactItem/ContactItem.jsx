import React from 'react';
import PropTypes from 'prop-types';
export const ContactItem =({id,name,number,onClick})=>{


    

    return(
        <li key={id}>{name} : {number}<button type='button' onClick={()=>onClick(id)}>Удалить</button></li>
    )
    
}
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}