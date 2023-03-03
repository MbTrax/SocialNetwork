import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
  newMessageChangeCreater,
  sendMessageCreater,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let sendMessage = () => {
    props.dispatch(sendMessageCreater());
  };

  let textMessageChange = (text) => {
    props.dispatch(newMessageChangeCreater(text));
  };

  let nowText = state.nowTextMessage;

  let dialogs = state.dialogsData.map((dialog) => {
    return (
      <React.Fragment key={dialog.id}>
        <Dialog name={dialog.name} id={dialog.id} />
      </React.Fragment>
    );
  });

  let messages = state.messagesData.map((message) => {
    return (
      <React.Fragment key={message.id}>
        <Message message={message.message} />
      </React.Fragment>
    );
  });

  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      sendMessage={sendMessage}
      textMessageChange={textMessageChange}
      nowText={nowText}
    />
  );
};

export default DialogsContainer;
