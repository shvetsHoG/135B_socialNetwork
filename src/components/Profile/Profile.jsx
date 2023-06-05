import React from "react";
import style from './Profile.module.css'
import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    );
}

export default Profile;