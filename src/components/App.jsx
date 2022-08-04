
// import {  useEffect } from 'react';
import { Form } from '../components/Form/Form';
import { useSelector } from 'react-redux';
import { ContactList } from './ContactItem/ContactList';
import { Filter } from './Filter/Filter';


export function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);



  // const formData = data => {
  //   const contact = {
  //     id: nanoid(),
  //     name: data.name,
  //     number: data.number,
  //   };
  // const repetitionCheck = contacts.some(p => p.name === contact.name);
  // if (repetitionCheck) {
  //       return Notiflix.Notify.info('Этот контакт уже добавлен');
  //     }
  //   setContacts(prevState => {
  //   return [contact, ...prevState];
  //   });
   
  // };


  // const onChangeFilter = e => {
  //   setFilter(e.target.value);
  // };
  
  // const deleteContact = id => {
  //   return setContacts(prevState => {
  //     return prevState.filter(c => c.id !== id);
  //   });
  // };
  const selectorFilter = useSelector(state => state.filter);
  const selectorContacts = useSelector(state => state.contacts);

  const normolizeFilter = selectorFilter.toLowerCase();
  const filterContacts = selectorContacts.filter(contact => {
    return contact.name.toLowerCase().includes(normolizeFilter);
  });
  // if(!contacts){
  //  return
  // }


  return (
    <div>
      <h1>Phonebook</h1>
      <Form  />
      <h1>Contacts</h1>
      <Filter />
      <ContactList dataSubscribers={filterContacts}  />
     
    </div>
  );
}
