import React from 'react';
export const ContactItem =({key,name,number})=>{
    
    return(
        <li key={key}>{name} : {number}</li>
    )
    
}