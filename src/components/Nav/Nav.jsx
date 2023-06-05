import React from "react";
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={style.nav}>
            <div className={style.wrap}>
                <NavLink to="/Profile"
                         className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
            </div>
            <div className={style.wrap}>
                <NavLink to="/Dialogs"
                         className={navData => navData.isActive ? style.active : style.item}>Message</NavLink>
            </div>
            <div className={style.wrap}>
                <NavLink to="/News" className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
            </div>
            <div className={style.wrap}>
                <NavLink to="/Music" className={navData => navData.isActive ? style.active : style.item}>Music</NavLink>
            </div>
            <div className={style.wrap}>
                <NavLink to="/Settings"
                         className={navData => navData.isActive ? style.active : style.item}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;