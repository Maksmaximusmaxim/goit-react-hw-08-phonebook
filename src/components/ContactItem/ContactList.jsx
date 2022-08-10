import React from 'react';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import {useGetPokemonByNameQuery} from 'components/redux/contactsApi';
export const ContactList = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  console.log(useGetPokemonByNameQuery);
  const { items, filter } = useSelector(state => state.contacts);
  console.log(filter, 'qwe');
  const normolizeFilter = filter.toLowerCase();
  const filterContacts = items.filter(contact => {
    return contact.name.toLowerCase().includes(normolizeFilter);
  });

  return (
    <ul>
      {filterContacts &&
        filterContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
    </ul>
  );
};
