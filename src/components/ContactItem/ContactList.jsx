import React from 'react';
import {ContactItem} from './ContactItem'
export const ContactList =({dataSubscribers})=>{
  
    return(
        <ul>
           {dataSubscribers.map(({id,data:{name,number}})=>{
    
            return (
                <ContactItem  key={id} name={name} number={number}/>
            )
            })}
        </ul>
    )

    
}