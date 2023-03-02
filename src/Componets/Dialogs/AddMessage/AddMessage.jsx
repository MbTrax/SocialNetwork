import React from "react";
import { newMessageChangeCreater, sendMessageCreater } from "../../../redux/state";
import c from './AddMessage.module.css'

let AddMessage = (props) => {
    let onChangeNewMessage = (e) =>{
        let text = e.target.value
        props.store.dispatch(newMessageChangeCreater(text))
    }

    let addMessage = () =>{
        props.store.dispatch(sendMessageCreater())
    }

    return (
        <div className={c.addMessage}>
            <textarea onChange={onChangeNewMessage} value = {props.store.getState().dialogsPage.nowTextMessage} placeholder="Type message..."></textarea>
            <button onClick = {addMessage}>Send</button>
        </div>
    )
}

export default AddMessage