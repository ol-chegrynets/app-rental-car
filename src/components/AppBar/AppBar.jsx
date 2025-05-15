import React from 'react';
import s from './AppBar.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Logo />
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
