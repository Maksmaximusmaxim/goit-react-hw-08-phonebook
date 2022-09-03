import React from 'react';
import { ContactItem } from './ContactItem';
import { useSelector  } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contactsApi';
export const ContactList = () => {
  const selector = useSelector(state => state.filter.filter);
  
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactsMutation();
  const normolizeFilter = selector.toLowerCase();
  const filterContacts =
    data &&
    data.filter(contact => {
      return contact.name.toLowerCase().includes(normolizeFilter);
    });

  return (
    <ul>
      {filterContacts &&
        filterContacts.map(({ id, name, number }) => {
          return (
            <section>
                <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={deleteContact}
            />
            </section>
          
          );
        })}
    </ul>
  );
};
