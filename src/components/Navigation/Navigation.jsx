import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Account } from 'components/account/Account';
export const Navigation = () => {
  const isLogIn = useSelector(state => state.user.isLogIn);
  return (
    <>
      <nav>
        {!isLogIn && (
          <>
            <NavLink to="/login">Вход</NavLink>
            <NavLink to="/register">Регестрация</NavLink>
          </>
        )}

        {isLogIn && (
          <>
            <NavLink to="/contacts">Ваши контакты</NavLink>
            <Account />
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
};
