import React from "react";
import style from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1683797465484-109681506e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </div>
            <div className={style.desriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;