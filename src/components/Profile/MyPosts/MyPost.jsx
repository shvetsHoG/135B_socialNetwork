import React from "react";
import style from './MyPost.module.css'
import Post from './Post/Post'

function MyPost(props) {

    const textareaRef = React.createRef();

    function addPost() {
        props.addPost();
    }

    function changeText() {
        const text = textareaRef.current.value;
        props.changeText(text);
    }

    const posts = props.postData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>);
        
    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={changeText} className={style.text} ref={textareaRef} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPost;