import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {

    const messageRef = React.createRef();

    function changeMessageText() {
        const text = messageRef.current.value;
        props.changeMessageText(text);
    }

    function sendMessage() {
        props.sendMessage();
    }

    const dialogs = props.dialogs.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messages = props.dialogs.dialogsMessages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsAndMessages}>
                <div >
                    {dialogs}
                </div>
                <div className={style.messages}>
                    {messages}
                </div>
            </div>
            <div className={style.sender}>
                <textarea className={style.textarea} ref={messageRef} onChange={changeMessageText} value={props.dialogs.newMessageText} />
                <button className={style.btn} onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;