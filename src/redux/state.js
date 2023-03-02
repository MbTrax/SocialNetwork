const ADD_POST = 'ADD-POST'
const NEW_POST_CHANGE = 'NEW-POST-CHANGE'
const ADD_LIKE = 'ADD-LIKE'
const SEND_MESSAGE = 'SEND-MESSAGE'
const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE'

const store = {
  _subcribe(){
    console.log('Not exsits subsribes')
  },
  _state:{
    profilePage: {
      newPostText: '',
      postsData: [
        { id: '1', message: 'Make in your DREAMS!', likeCount: 34, image: 'https://coolsen.ru/wp-content/uploads/2021/09/image143-6.jpg' },
        { id: '2', message: 'Do it!', likeCount: 10, image: 'https://i.pinimg.com/originals/18/c7/2c/18c72c635bcd4bddad6c6f27ab365aad.jpg' },
      ]
    },
    dialogsPage: {
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

  },
  getState(){
      return this._state
  },
  setSubscribe(observer){
    this._subcribe = observer
  }
  ,
  dispatch(action){
    if (action.type === ADD_POST){
      let item = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
        image: 'https://damion.club/uploads/posts/2022-03/1646255026_29-damion-club-p-anime-tyan-na-avu-v-stime-art-31.jpg'
      }
      this._state.profilePage.postsData.push(item)
      this._state.profilePage.newPostText = ''
      this._subcribe(this)
    } else if (action.type === NEW_POST_CHANGE){
      this._state.profilePage.newPostText = action.newText
      this._subcribe(this)
    } else if (action.type === ADD_LIKE){
      this._state.profilePage.postsData.find(post => post.id === action.id).likeCount += 1
      this._subcribe(this)
    } else if (action.type === SEND_MESSAGE){
      this._state.dialogsPage.messagesData.push({id: 6, message: this._state.dialogsPage.nowTextMessage})
      this._state.dialogsPage.nowTextMessage = ''
      this._subcribe(this)
    } else if (action.type === NEW_MESSAGE_CHANGE){
      this._state.dialogsPage.nowTextMessage = action.newText
      this._subcribe(this)
    }
  }
}
export const sendMessageCreater = () => ({type: SEND_MESSAGE})
export const newMessageChangeCreater = (text) => ({type: NEW_MESSAGE_CHANGE, newText: text})

export const addPostActionCreater = () => ({type: ADD_POST})
export const newPostChangeActionCreater = (text) => ({type: NEW_POST_CHANGE, newText: text})
export const addLikeActionCreater = (id) => ({type: ADD_LIKE, id: id})
window.state = store.getState()
export default store