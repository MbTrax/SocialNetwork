import React from "react";
import Post from "./Post/Post";
import MyPost from "./MyPost";
import {
  addPostActionCreater,
  newPostChangeActionCreater,
  addLikeActionCreater,
} from "../../../redux/profileReducer";

let MyPostContainer = (props) => {
  let state = props.store.getState();

  let textPostChange = (text) => {
    props.dispatch(newPostChangeActionCreater(text));
  };

  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };

  let addLike = (id) =>{
    props.dispatch(addLikeActionCreater(id));
  };

  let newPostTextData = state.profilePage.newPostText;

  let postsData = state.profilePage.postsData.map((post) => {
    return (
      <React.Fragment key={post.id}>
        <Post
          message={post.message}
          likes={post.likeCount}
          image={post.image}
          id={post.id}
          state={props.state}
          dispatch={props.dispatch}
          addLike={addLike}
        />
      </React.Fragment>
    );
  });



  return (
    <MyPost
      posts={postsData}
      newPostText={newPostTextData}
      textPostChange={textPostChange}
      addPost={addPost}
    />
  );
};

export default MyPostContainer;
