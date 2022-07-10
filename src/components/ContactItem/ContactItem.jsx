import React from 'react';
export const ContactItem =({key,name,number,onClick})=>{
    console.log(key)
    return(
        <li key={key}>{name} : {number}<button type='button' onClick={()=>onClick(key)}>Удалить</button></li>
    )
    
}