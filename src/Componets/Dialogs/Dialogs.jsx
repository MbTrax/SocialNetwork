import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import c from './Dialogs.module.css'
import AddMessage from "./AddMessage/AddMessage";

let Dialogs = (props) => {
    let state = props.store.getState().dialogsPage
    return (
        <div className={c.content}>
            <h1>Messages</h1>

            <div className={c.dialogs}>

                {state.dialogsData.map(dialog => {
                    return (
                        <React.Fragment key={dialog.id}>
                            <Dialog name={dialog.name} id={dialog.id} />
                        </React.Fragment>
                    );
                })}
            </div>
            <div className={c.messages}>
                {state.messagesData.map(message => {
                    return(
                        <React.Fragment key={message.id}>
                            <Message message={message.message} />
                        </React.Fragment>
                    );
                })}
            </div>
            <AddMessage />
        </div>
    )
}

export default Dialogs