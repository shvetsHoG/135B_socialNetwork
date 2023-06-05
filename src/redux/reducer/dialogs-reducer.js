const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

const initialState = {
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
};

function _sendMessage(state) {
    const stateCopy = {
        ...state,
        dialogsMessages: [...state.dialogsMessages],
    };
    const sizeOfMessageData = state.dialogsMessages.length;
    const newMessage = {
        id: state.dialogsMessages[sizeOfMessageData - 1].id + 1,
        message: state.newMessageText,
    }
    stateCopy.dialogsMessages.push(newMessage);
    stateCopy.newMessageText = '';
    return stateCopy;
}

function _changeMessageText(state, newText) {
    const stateCopy = {...state};
    stateCopy.newMessageText = newText;
    return stateCopy;
}

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newState = _sendMessage(state);
            return newState;
        }

        case CHANGE_MESSAGE_TEXT: {
            const newState = _changeMessageText(state, action.text);
            return newState;
        }

        default: return state;
    }
}

export default dialogsReducer;

export function sendMessageActionCreator() {
    return {
        type: SEND_MESSAGE,
    }
}

export function changeMessageTextActionCreator(text) {
    return {
        type: CHANGE_MESSAGE_TEXT,
        text: text,
    }
}