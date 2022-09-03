import { Route, Routes } from 'react-router-dom';

import { Form } from '../components/Form/Form';
import { ContactList } from './ContactItem/ContactList';
import { Filter } from './Filter/Filter';
import { Navigation } from 'components/Navigation/Navigation';
import { Register } from 'Page/Register';
import { Login } from 'Page/Login';
import { ProvideRoute } from './ProvideRoute';
import { PublicRoute } from './PublicRoute';
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<h1>Это базовая страница моего приложения</h1>}/>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<ProvideRoute />}>
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
