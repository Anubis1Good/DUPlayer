import React from 'react';

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Все треки</Link>
      <Link to="/artists">Исполнители</Link>
      <Link to="/about">О проекте</Link>
    </nav>
  );
}

export default NavBar;