
// import {  useEffect } from 'react';
import { Form } from '../components/Form/Form';
import { ContactList } from './ContactItem/ContactList';
import { Filter } from './Filter/Filter';


export function App() {
//   const [contacts, setContacts] = useState(
//     JSON.parse(window.localStorage.getItem('contacts')) ?? []
//   );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);



  return (
    <div>
      <h1>Phonebook</h1>
      <Form  />
      <h1>Contacts</h1>
      <Filter />
      <ContactList   />
     
    </div>
  );
}
