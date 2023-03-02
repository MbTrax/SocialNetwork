import React from "react"
import c from './NewPost.module.css'

let NewPost = (props) => {

  let addPostElement = React.createRef();

  let addPost = () => {
    props.store.addPost();
  }

  let onPostChange = () => {
    let text = addPostElement.current.value;
    props.store.newPostChange(text);
  }
  return (
    <div className={c.newPost}>
      <textarea ref={addPostElement} onChange={onPostChange} type='text' placeholder='your news...' value={props.store.getState().profilePage.newPostText}/>
      <button onClick={addPost}>
        Send
      </button>
    </div>
  );
}

export default NewPost