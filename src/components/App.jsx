import React, { Component } from 'react';
import { Form } from '../components/Form/Form';
import { nanoid } from "nanoid";
export class App extends Component {
  
  state = {
    contacts: [],
    
  }
loginInputId = nanoid();

formData = data =>{
  console.log(data)
  const contact = {
    id:this.loginInputId,
    data:data
  };
  this.setState((prevState)=>{return {contacts : [contact, ...prevState.contacts]}})
}
 

  render(){
     return (
    <div>
      <h1>Phonebook</h1>
 <Form id={this.loginInputId} onSubmit={this.formData}/>
    </div>
  )
  }
 
};
