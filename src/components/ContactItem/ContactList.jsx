import React from 'react';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contactsApi';
export const ContactList = () => {
  const selector = useSelector(state => state.filter.filter);
  console.log(selector);
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
        filterContacts.map(({ id, name, phone }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={phone}
              onDelete={deleteContact}
            />
          );
        })}
    </ul>
  );
};
