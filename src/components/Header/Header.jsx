import React from "react";
import style from './Header.module.css'


function Header() {
    return (
      <header className={style.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
      </header>
    );
}

export default Header;