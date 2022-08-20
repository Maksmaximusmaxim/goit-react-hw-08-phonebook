import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Account } from 'components/account/Account';
export const Navigation = () => {

  return (
    <>
      <nav>
        <NavLink to="/login">Вход</NavLink>
        <NavLink to="/register">Регестрация</NavLink>
        <NavLink to="/contacts">Ваши контакты</NavLink>
        <Account />
      </nav>
      <Outlet />
    </>
  );
};
