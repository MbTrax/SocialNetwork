import React from "react";
import c from './Message.module.css'

let Message = (props) => {
    return (
        <div className={c.message}>
            {props.message}
        </div>
    )
}

export default Message