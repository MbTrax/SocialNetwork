import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import c from './Dialogs.module.css'
import AddMessage from "./AddMessage/AddMessage";

let Dialogs = (props) => {
    return (
        <div className={c.content}>
            <h1>Messages</h1>

            <div className={c.dialogs}>

                {props.state.dialogsPage.dialogsData.map(dialog => {
                    return (
                        <React.Fragment key={dialog.id}>
                            <Dialog name={dialog.name} id={dialog.id} />
                        </React.Fragment>
                    );
                })}
            </div>
            <div className={c.messages}>
                {props.state.dialogsPage.messagesData.map(message => {
                    return(
                        <React.Fragment key={message.id}>
                            <Message message={message.message} />
                        </React.Fragment>
                    );
                })}
            </div>
            <AddMessage state = {props.state} dispatch = {props.dispatch}/>
        </div>
    )
}

export default Dialogs