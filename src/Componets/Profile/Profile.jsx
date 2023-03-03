import React from "react"
import MyPostContainer from './MyPosts/MyPostContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
// import c from './Profile.module.css'

let Profile = (props) => {
    return(
      <div>
        <ProfileInfo />
        <MyPostContainer store = {props.store} dispatch = {props.dispatch}/>
      </div>
    );
}

export default Profile