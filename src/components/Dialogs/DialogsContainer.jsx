import Dialogs from './Dialogs';
import {changeMessageTextActionCreator, sendMessageActionCreator} from "../../redux/reducer/dialogs-reducer";
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        dialogs: state.messagesPage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeMessageText: (text) => {
            const action = changeMessageTextActionCreator(text);
            dispatch(action);
        },

        sendMessage: () => {
            const action = sendMessageActionCreator();
            dispatch(action);
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;