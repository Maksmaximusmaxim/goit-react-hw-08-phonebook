import React from 'react';
import {ContactItem} from './ContactItem'
export const ContactList =({dataSubscribers})=>{
    console.log(dataSubscribers)
    return(
        <ul>
           {dataSubscribers.map(({id,data:{name,number}})=>{
            console.log(id);
            console.log(name)
            return (
                <ContactItem  key={id} name={name} number={number}/>
            )
            })}
        </ul>
    )

    
}