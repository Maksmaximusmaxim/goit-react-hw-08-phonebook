import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Account } from 'components/account/Account';
import css from 'components/Navigation/Navigation.module.css'
export const Navigation = () => {
  const isLogIn = useSelector(state => state.user.isLogIn);
  return (
    <>
      <nav className={css.nav}>
        {!isLogIn && (
          <>
            <NavLink className={css.link} to="/login">Вход</NavLink>
            <NavLink className={css.link} to="/register">Регестрация</NavLink>
          </>
        )}

        {isLogIn && (
          <>
            {/* <NavLink className={css.link} to="/contacts">Ваши контакты</NavLink> */}
            <Account />
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
};
