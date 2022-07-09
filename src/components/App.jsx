import React, { Component } from 'react';
import { Form } from '../components/Form/Form';
import { nanoid } from "nanoid";
import {ContactList} from './ContactItem/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  
  state = {
    contacts: [ ],
    filter: '',
  }
loginInputId = nanoid();

formData = data =>{

  console.log(data);

  const contact = {
    id:this.loginInputId,
    data:data
  };
  
  this.setState((prevState)=>{return {contacts : [contact, ...prevState.contacts]}})
  console.log(this.state.contacts)
 
}
 
onChangeFilter=e=>{
  console.log(e.target)
  this.setState({
   filter: e.target.value
  })
}

  render(){
    const normolizeFilter = this.state.filter.toLowerCase();
    const filterContacts =this.state.contacts.filter(contact => {
     return contact.data.name.toLowerCase().includes(normolizeFilter)
    });
    
     return (
    <div >
      <h1>Phonebook</h1>
 <Form id={this.loginInputId} onSubmit={this.formData}/>
 <h1>Contacts</h1>
 <Filter value={this.state.filter} onChange={this.onChangeFilter} /> 
<ContactList  dataSubscribers={filterContacts}/>
    </div>
  )
  }
 
};
