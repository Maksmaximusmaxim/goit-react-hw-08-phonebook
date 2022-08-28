import { Route, Routes } from 'react-router-dom';

import { Form } from '../components/Form/Form';
import { ContactList } from './ContactItem/ContactList';
import { Filter } from './Filter/Filter';
import { Navigation } from 'components/Navigation/Navigation';
import { Register } from 'Page/Register';
import { Login } from 'Page/Login';
import { ProvideRoute } from './ProvideRoute';
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<ProvideRoute/>}>
           <Route
          path="/contacts"
          element={
            <div>
              <h1>Phonebook</h1>
              <Form />
              <h1>Contacts</h1>
              <Filter />
              <ContactList />
            </div>
          }
        />
        </Route>
       
   
        <Route path="*" element={<h1>hi</h1>} />
      </Route>
    </Routes>
  );
}
