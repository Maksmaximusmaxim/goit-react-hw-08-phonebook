import { Form } from '../components/Form/Form';
import { ContactList } from './ContactItem/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}
