import React from 'react';
import css from 'components/Form/Form.module.css';
import {useLogInMutation} from '../redux/userApi'
import { useState } from 'react';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn]=useLogInMutation()
const onSubmit = e => {
    e.preventDefault()
    logIn({email,password})
    reset();
}
const reset = ()=>{
    setEmail("");
    setPassword("");
}

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  return (
    <form
    onSubmit={onSubmit}
    >
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
        Вход
      </button>
    </form>
  );
};
