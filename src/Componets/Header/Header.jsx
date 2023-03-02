import React from "react";
import c from './Header.module.css'
import logo from './logo.png'
let Header = () => {
  return (
    <header className={c.header}>
      <img src={logo} alt='Not Found'></img>
    </header>
  );
}

export default Header