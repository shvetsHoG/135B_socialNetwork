const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";

const initialState = {
    postData: [
        {id: 0, message: 'first post', likesCount: 0,},
        {id: 1, message: 'second post', likesCount: 3,},
        {id: 2, message: 'third post', likesCount: 2,},
    ],
    newPostText: 'Введите сообщение',
}

function _changeText(state, newText) {
    const stateCopy = {...state};
    stateCopy.newPostText = newText;
    return stateCopy;
}

function _addPost(state) {
    const stateCopy = {
        ...state,
        postData: [...state.postData],
    };
    const sizeOfPostData = state.postData.length;
    const newPost = {
        id: state.postData[sizeOfPostData - 1] + 1,
        message: state.newPostText,
        likesCount: 0,
    }
    stateCopy.postData.push(newPost);
    stateCopy.newPostText = '';
    return stateCopy;
}

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            const newState = _addPost(state);
            return newState;
        }
        case CHANGE_TEXT: {
            const newState = _changeText(state, action.text);
            return newState;
        }
        default: return state;
    }
}

export default profileReducer;

export function addPostActionCreator() {
    return {
        type: ADD_POST,
    }
}

export function changeTextActionCreator(text) {
    return {
        type: CHANGE_TEXT,
        text: text,
    }
}
