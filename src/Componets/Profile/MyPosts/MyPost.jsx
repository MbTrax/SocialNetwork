import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import c from "./MyPost.module.css";

let MyPost = (props) => {
  let posts = props.profilePage.postsData.map((post) => {
    return (
      <React.Fragment key={post.id}>
        <Post
          message={post.message}
          likes={post.likeCount}
          image={post.image}
          id={post.id}
          addLike={props.addLike}
        />
      </React.Fragment>
    );
  });
  return (
    <div className={c.posts}>
      <h1>My Posts</h1>
      <NewPost
        newPostText={props.profilePage.newPostText}
        textPostChange={props.textPostChange}
        addPost={props.addPost}
      />
      {posts}
    </div>
  );
};

export default MyPost;
