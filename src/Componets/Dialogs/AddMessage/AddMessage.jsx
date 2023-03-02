import React from "react";
import c from './AddMessage.module.css'

let AddMessage = (props) => {
    let addMessageElement = React.createRef()

    let addMessage = () =>{
        let text = addMessageElement.current.value
        alert(text)
    }

    return (
        <div className={c.addMessage}>
            <textarea ref={addMessageElement} placeholder="Type message..."></textarea>
            <button onClick = {addMessage}>Send</button>
        </div>
    )
}

export default AddMessage