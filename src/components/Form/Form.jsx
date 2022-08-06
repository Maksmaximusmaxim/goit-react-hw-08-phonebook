import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/store';
import css from '../Form/Form.module.css';
export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
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
