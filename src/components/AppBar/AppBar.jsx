import React from 'react';
import s from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <p className={s.textLogo}>
          rental
          <span className={s.textLogoSpan}>car</span>
        </p>
      </div>
      <div className={s.navWrapper}>
        <nav className={s.nav}>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <NavLink to="/" className={s.navLink}>
                Home
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink to="/catalog" className={s.navLink}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
