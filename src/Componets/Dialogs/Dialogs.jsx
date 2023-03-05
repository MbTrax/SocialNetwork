import React from "react";
import c from "./Dialogs.module.css";
import AddMessage from "./AddMessage/AddMessage";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let Dialogs = (props) => {
  let messages = props.dialogsPage.messagesData.map((message) => {
    return (
      <React.Fragment key={message.id}>
        <Message message={message.message} />
      </React.Fragment>
    );
  });

  let dialogs = props.dialogsPage.dialogsData.map((dialog) => {
    return (
      <React.Fragment key={dialog.id}>
        <Dialog name={dialog.name} id={dialog.id} />
      </React.Fragment>
    );
  });

  return (
    <div className={c.content}>
      <h1>Messages</h1>
      <div className={c.dialogs}>{dialogs}</div>
      <div className={c.messages}>{messages}</div>
      <AddMessage
        nowText={props.dialogsPage.nowTextMessage}
        sendMessage={props.sendMessage}
        textMessageChange={props.textMessageChange}
      />
    </div>
  );
};

export default Dialogs;
