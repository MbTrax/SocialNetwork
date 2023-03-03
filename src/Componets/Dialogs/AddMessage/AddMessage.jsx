import React from "react";
import c from "./AddMessage.module.css";

let AddMessage = (props) => {
  let onChangeNewMessage = (e) => {
    let text = e.target.value;
    props.textMessageChange(text)
  };

  let addMessage = () => {
    props.sendMessage()
  };

  return (
    <div className={c.addMessage}>
      <textarea
        onChange={onChangeNewMessage}
        value={props.nowText}
        placeholder="Type message..."
      ></textarea>
      <button onClick={addMessage}>Send</button>
    </div>
  );
};

export default AddMessage;
