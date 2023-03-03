import React from "react";
import c from "./NewPost.module.css";

let NewPost = (props) => {
  let addPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = addPostElement.current.value;
    props.textPostChange(text);
  };
  return (
    <div className={c.newPost}>
      <textarea
        ref={addPostElement}
        onChange={onPostChange}
        type="text"
        placeholder="your news..."
        value={props.newPostText}
      />
      <button onClick={addPost}>Send</button>
    </div>
  );
};

export default NewPost;
