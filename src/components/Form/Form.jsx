import { useState } from 'react';
import Notiflix from 'notiflix';

import css from '../Form/Form.module.css';
import {useCreateContactsMutation ,useGetContactsQuery } from 'redux/contactsApi';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContacts] = useCreateContactsMutation()
  const { data } = useGetContactsQuery();
  // console.log(data)


  const onSubmit = e => {
    e.preventDefault();
  const repetitionCheck =data && data.some(p => p.name === name);
        if (repetitionCheck) {
          reset();
          return Notiflix.Notify.info('Этот контакт уже добавлен');
        }
    createContacts({ name, phone:number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const alterationValue = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label className={css.label}>
        имя
        <input
          className={css.input}
          onChange={alterationValue}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        {' '}
        номер
        <input
          className={css.input}
          onChange={alterationValue}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.formbtn} type="submit">
        Добавить контакт
      </button>
    </form>
  );
}
