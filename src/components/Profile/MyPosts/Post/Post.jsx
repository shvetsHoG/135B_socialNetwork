import React from "react";
import style from './Post.module.css'

function Post(props) {
    return (
        <div>
            <div className={style.item}>
                <img
                    src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'></img>
                {props.message}
            </div>
            <span className={style.like}>{props.likesCount} UP</span>
            <span className={style.dislike}>{props.dislikesCount} DOWN</span>
        </div>
    );
}

export default Post;