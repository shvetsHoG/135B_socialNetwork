import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = `dialog/${props.id}`;
    return (
        <div className={style.dialog}>
            <NavLink className={style.dialogItem} to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;