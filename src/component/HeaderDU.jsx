import React from 'react';
import style from '../component/style/HeaderDU.module.css'
import { Link } from "react-router-dom";

function HeaderDU() {
  return (
    <header>
      <Link to="/">Главная</Link>
      <Link to="/about">О проекте</Link>
    </header>
  );
}

export default HeaderDU;