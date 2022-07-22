import Notiflix from 'notiflix';
import  {useState , useEffect} from 'react';
import { Form } from '../components/Form/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactItem/ContactList';
import { Filter } from './Filter/Filter';

export function App () {
const [contacts,setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts') ) ?? []);
const [filter, setFilter]=useState('');


useEffect(()=>{window.localStorage.setItem('contacts', JSON.stringify(contacts))},[contacts])

  // componentDidMount() {
  //   const localStoradgeContacts = localStorage.getItem('contacts');
  //   const parseContacts = JSON.parse(localStoradgeContacts);
  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState);
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
 const formData = data => {
   
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    setContacts(prevState => {
      
      const repetitionCheck = contacts.some(
        p => p.name === contact.name
      );

      if (repetitionCheck) {
        return Notiflix.Notify.info('Этот контакт уже добавлен');
        
      } 
      return ([contact, ...prevState])  
      
     
     
    });
    console.log(contacts , 'ferfer')
  };

  console.log(contacts , 'ferfer12')
 const onChangeFilter = e => {
    setFilter(e.target.value);
  };
const deleteContact = id => {     
 return setContacts(prevState => {
  return prevState.filter(c => c.id !== id)
 }
  
   );
  }


 
    const normolizeFilter = filter.toLowerCase();
    console.log(contacts , 'fefer');
    const filterContacts = contacts.filter(contact =>{return contact.name.toLowerCase().includes(normolizeFilter)});
    console.log(filterContacts , '123456');

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmitb={formData} />
        <h1>Contacts</h1>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList
          dataSubscribers={filterContacts}
          onClick={deleteContact}
        />
      </div>
    );
  
}
