import React from 'react';
import css from 'components/Form/Form.module.css';
import { useState } from 'react';
import { useSingUpMutation} from 'redux/userApi';
// import { useSelector } from 'react-redux';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [singUp] = useSingUpMutation();
// const selector = useSelector(state => state)
// console.log(selector)
  const onSubmit = e => {
    e.preventDefault();
    singUp({name, email , password , isLogIn:true});
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        return;
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <label className={css.label}>
        Имя
        <input
          className={css.input}
          onChange={onChange}
          value={name}
          type="text"
          name="name"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <label className={css.label}>
        Почта
        <input
          className={css.input}
          onChange={onChange}
          type="email"
          value={email}
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Пароль
        <input
          className={css.input}
          onChange={onChange}
          value={password}
          type="password"
          name="password"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.formbtn} type="submit">
        Регестрация
      </button>
    </form>
  );
};
