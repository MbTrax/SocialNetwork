import React from "react"
import c from './Post.module.css'

let Post = (props) => {
  
  let addLike = () => {
    props.addLike(props.id)
  }

  return (
    <div className={c.post}>
      <img className={c.avatar} src={props.image} alt='Not Found'></img>
      <div>
        {props.message}
      </div>
      <img onClick={addLike} className={c.like} src='https://i.pinimg.com/736x/71/d2/80/71d28030b4406277abf5f632b1f4b697.jpg' alt="Not Found" />
      <p className={c.count}>{props.likes}</p>
    </div>
  );
}

export default Post