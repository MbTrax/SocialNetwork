import React from "react"
import MyPosts from './MyPosts/MyPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
// import c from './Profile.module.css'

let Profile = (props) => {
    return(
      <div>
        <ProfileInfo />
        <MyPosts store = {props.store}/>
      </div>
    );
}

export default Profile