import React from "react"
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'
import c from './MyPost.module.css'

let MyPost = (props) => {
  return (
    <div className={c.posts}>
      <h1>
        My Posts
      </h1>
      <NewPost state = {props.state} dispatch = {props.dispatch}/>
      {props.state.profilePage.postsData.map(post => {
        return (
          <React.Fragment key={post.id}>
            <Post message={post.message} likes={post.likeCount} image={post.image} id={post.id} state = {props.state} dispatch = {props.dispatch}/>
          </React.Fragment>
        );
      })}

    </div>
  );
}

export default MyPost