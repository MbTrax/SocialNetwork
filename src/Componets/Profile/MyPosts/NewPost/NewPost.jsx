import React from "react"
import { addPostActionCreater, newPostChangeActionCreater } from "../../../../redux/profileReducer";
import c from './NewPost.module.css'


let NewPost = (props) => {
  let addPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreater());
  }

  let onPostChange = () => {
    let text = addPostElement.current.value;
    props.dispatch(newPostChangeActionCreater(text));
  }
  return (
    <div className={c.newPost}>
      <textarea ref={addPostElement} onChange={onPostChange} type='text' placeholder='your news...' value={props.state.profilePage.newPostText} />
      <button onClick={addPost}>
        Send
      </button>
    </div>
  );
}

export default NewPost