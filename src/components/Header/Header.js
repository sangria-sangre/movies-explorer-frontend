import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className={props.main ? "header background-pink" : "header"}>
      <Link className="header__logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Navigation login={props.login} />
    </header>
  );
}

export default Header;