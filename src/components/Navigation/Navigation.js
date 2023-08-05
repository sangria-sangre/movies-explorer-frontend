import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../../images/icon-profile.svg';
import menu from '../../images/icon-menu.svg';
import cross from '../../images/icon-cross.svg';
import './Navigation.css';

function Navigation(props) {

  const [menuStatus, setMenuStatus] = React.useState(true);
  function menuIconAble() { setMenuStatus(true); }
  function menuIconDisable() { setMenuStatus(false); }

  const mobileWidthMediaQuery = window.matchMedia('(min-width: 1280px)');

  mobileWidthMediaQuery.addEventListener('change', function () {
    menuIconDisable();
  })

  React.useEffect(() => {
    if (mobileWidthMediaQuery.matches) {
      menuIconDisable();
    }
  }, []);

  return (
    <nav className="header__nav">
      <ul className={props.login ? "nav__disabled" : "nav nav__main"}>
        <li><NavLink className="nav__main_link" to="/signup">
          Регистрация
        </NavLink></li>
        <li><NavLink className="nav__main_link nav__main_signin" to="/signin">
          Войти
        </NavLink></li>
      </ul>

      <ul className={props.login ? "nav nav__login" : "nav__disabled"}>
        <li><img className={menuStatus ? "nav__img-menu" : "nav__disabled"} src={menu} alt="profile_menu" onClick={menuIconDisable} /></li>
        <li className={menuStatus ? "nav__disabled" : "nav__login_blackout"}>
          <ul className={menuStatus ? "nav__disabled" : "nav__login_sidebar"}>
            <img className="sidebar__img-cross" src={cross} alt="profile_menu" onClick={menuIconAble} />
            <li className="sidebar__main"><NavLink to="/" className={({ isActive }) => `sidebar__link ${isActive ? "sidebar__link_active" : ""}`} >Главная</NavLink></li>
            <li><NavLink to="/movies" className={({ isActive }) => `sidebar__link ${isActive ? "sidebar__link_active" : ""}`} >Фильмы</NavLink></li>
            <li><NavLink to="/saved-movies" className={({ isActive }) => `sidebar__link ${isActive ? "sidebar__link_active" : ""}`}>Сохранённые фильмы</NavLink></li>
            <li className="sidebar__account"><NavLink to="/profile" className="account__link">Аккаунт</NavLink>
              <img className="account__img" src={icon} alt="profile_photo" /></li>
          </ul></li>
      </ul>
    </nav>
  );
}

export default Navigation;