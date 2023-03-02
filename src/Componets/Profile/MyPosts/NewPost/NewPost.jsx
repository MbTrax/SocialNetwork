import React from "react"
import { addPostActionCreater, newPostChangeActionCreater } from "../../../../redux/state";
import c from './NewPost.module.css'


let NewPost = (props) => {

  let addPostElement = React.createRef();

  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
  }

  let onPostChange = () => {
    let text = addPostElement.current.value;
    props.store.dispatch(newPostChangeActionCreater(text));
  }
  return (
    <div className={c.newPost}>
      <textarea ref={addPostElement} onChange={onPostChange} type='text' placeholder='your news...' value={props.store.getState().profilePage.newPostText} />
      <button onClick={addPost}>
        Send
      </button>
    </div>
  );
}

export default NewPost