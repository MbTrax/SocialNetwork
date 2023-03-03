const SEND_MESSAGE = 'SEND-MESSAGE'
const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE'

let initialState = {
        messagesData: [
          { id: '1', message: 'Hi' },
          { id: '2', message: 'Yo' },
          { id: '3', message: 'How are you?' },
          { id: '4', message: 'Fine!' },
          { id: '5', message: 'Very good!' },
        ],
        dialogsData: [
          { id: '1', name: 'Muni' },
          { id: '2', name: 'Danila' },
          { id: '3', name: 'Dima' },
          { id: '4', name: 'Robert' },
          { id: '5', name: 'Yanix' },
        ],
        nowTextMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    
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