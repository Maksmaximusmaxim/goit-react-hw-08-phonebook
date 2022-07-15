import Notiflix from 'notiflix';
import React, { Component } from 'react';
import { Form } from '../components/Form/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactItem/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formData = data => {
    console.log(data);

    const contact = {
      id: nanoid(),
      name:data.name,
      number:data.number
    };

    this.setState(prevState => {
      console.log(prevState)
      const repetitionCheck = this.state.contacts.some(
        p => p.name === contact.name
      );

      if (repetitionCheck) {
        Notiflix.Notify.info('Этот контакт уже добавлен');
        console.log(repetitionCheck);
        return;
      }
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  deleteContact = id => {
    console.log(id);

    return this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  componentDidMount(){
    
    const localStoradgeContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(localStoradgeContacts);
    if(parseContacts){
     this.setState({contacts:parseContacts}) 
    }
    
  }
  componentDidUpdate(prevProps, prevState){
    console.log(prevState)
if(this.state.contacts !==prevState.contacts ){
  
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
  }

  render() {
    const normolizeFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normolizeFilter);
    });
    console.log(filterContacts)

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formData} />
        <h1>Contacts</h1>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList
          dataSubscribers={filterContacts}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
