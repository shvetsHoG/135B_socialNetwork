import {addPostActionCreator, changeTextActionCreator} from "../../../redux/reducer/profile-reducer";
import MyPost from './MyPost';
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => {
            const action = addPostActionCreator();
            dispatch(action);
        },

        changeText: (text) => {
            const action = changeTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;