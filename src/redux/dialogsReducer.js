const SEND_MESSAGE = 'SEND-MESSAGE'
const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE'

const dialogsReducer = (state, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            state.messagesData.push({id: 6, message: state.nowTextMessage})
            state.nowTextMessage = ''
            return state
        case NEW_MESSAGE_CHANGE:
            state.nowTextMessage = action.newText
            return state
        default: return state
    }
       

}
export const sendMessageCreater = () => ({type: SEND_MESSAGE})
export const newMessageChangeCreater = (text) => ({type: NEW_MESSAGE_CHANGE, newText: text})

export default dialogsReducer