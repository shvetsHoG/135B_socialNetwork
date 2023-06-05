import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";

const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 0, message: 'first post', likesCount: 0,},
                {id: 1, message: 'second post', likesCount: 3,},
                {id: 2, message: 'third post', likesCount: 2,},
            ],
            newPostText: 'Введите сообщение',
        },
        messagesPage: {
            dialogsMessages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hello'},
                {id: 3, message: ')'},
            ],
            dialogsData: [
                {id: 1, name: 'Kirill'},
                {id: 2, name: 'Nastya'},
                {id: 3, name: 'Else'},
            ],
            newMessageText: 'Введите сообщение',
        },
    },

    rerender: () => {},

    get state() {
        return this._state;
    },

    getObserverFunction(observer) {
        this.rerender = observer;
    },


    dispatch(action) {
        this.state.messagesPage = dialogsReducer(this.state.messagesPage, action);
        this.state.profilePage = profileReducer(this.state.profilePage, action);

        this.rerender(this.state);
    }
};

window.store = store;

export default store;