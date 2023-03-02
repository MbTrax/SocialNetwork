import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

let Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/feed" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/setings" className={navData => navData.isActive ? s.active : s.item}>Setings</NavLink>
      </div>
    </nav>
  );
}

export default Nav