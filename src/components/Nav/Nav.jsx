import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className={style.nav}>
      <Link to='/'>
        <span className={style.appName}>
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className={style.about}>About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
