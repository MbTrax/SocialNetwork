import React from "react";
import c from "./Dialogs.module.css";
import AddMessage from "./AddMessage/AddMessage";

let Dialogs = (props) => {
  return (
    <div className={c.content}>
      <h1>Messages</h1>
      <div className={c.dialogs}>{props.dialogs}</div>
      <div className={c.messages}>{props.messages}</div>
      <AddMessage
        nowText={props.nowText}
        sendMessage={props.sendMessage}
        textMessageChange={props.textMessageChange}
      />
    </div>
  );
};

export default Dialogs;
