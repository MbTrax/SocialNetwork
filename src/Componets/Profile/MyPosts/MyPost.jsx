import React from "react";
import NewPost from "./NewPost/NewPost";
import c from "./MyPost.module.css";

let MyPost = (props) => {
  return (
    <div className={c.posts}>
      <h1>My Posts</h1>
      <NewPost
        newPostText={props.newPostText}
        textPostChange={props.textPostChange}
        addPost={props.addPost}
      />
      {props.posts}
    </div>
  );
};

export default MyPost;
