import React from "react";
import { newMessageChangeCreater, sendMessageCreater } from "../../../redux/dialogsReducer";
import c from './AddMessage.module.css'

let AddMessage = (props) => {
    let onChangeNewMessage = (e) =>{
        let text = e.target.value
        props.dispatch(newMessageChangeCreater(text))
    }

    let addMessage = () =>{
        props.dispatch(sendMessageCreater())
    }

    return (
        <div className={c.addMessage}>
            <textarea onChange={onChangeNewMessage} value = {props.state.dialogsPage.nowTextMessage} placeholder="Type message..."></textarea>
            <button onClick = {addMessage}>Send</button>
        </div>
    )
}

export default AddMessage