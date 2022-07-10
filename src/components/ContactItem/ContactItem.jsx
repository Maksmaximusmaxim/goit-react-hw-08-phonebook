import React from 'react';
export const ContactItem =({id,name,number,onClick})=>{
    console.log(id)
    console.log(id)
    console.log(id)
    console.log(id)
    console.log(id)
    
    

    return(
        <li key={id}>{name} : {number}<button type='button' onClick={()=>onClick(id)}>Удалить</button></li>
    )
    
}