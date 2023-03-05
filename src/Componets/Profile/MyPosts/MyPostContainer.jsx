import MyPost from "./MyPost";
import { connect } from "react-redux";
import {addPostActionCreater, newPostChangeActionCreater, addLikeActionCreater,} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addLike: (id) => {
      dispatch(addLikeActionCreater(id));
    },
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    textPostChange: (text) => {
      dispatch(newPostChangeActionCreater(text));
    },
  };
};

let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
