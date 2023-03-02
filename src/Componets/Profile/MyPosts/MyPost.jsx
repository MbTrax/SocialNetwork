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
      <NewPost store = {props.store} />
      {props.store.getState().profilePage.postsData.map(post => {
        return (
          <React.Fragment key={post.id}>
            <Post message={post.message} likes={post.likeCount} image={post.image} id={post.id} store = {props.store}/>
          </React.Fragment>
        );
      })}

    </div>
  );
}

export default MyPost