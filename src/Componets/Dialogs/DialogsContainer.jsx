import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { newMessageChangeCreater, sendMessageCreater } from "../../redux/dialogsReducer";

let mapStateToProps = (state) =>{
  return{
    dialogsPage : state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    sendMessage : () => {dispatch(sendMessageCreater())},
    textMessageChange : (text) => dispatch(newMessageChangeCreater(text))
  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
