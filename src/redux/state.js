import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

const store = {
  _subcribe() {
    console.log('Not exsits subsribes')
  },
  _state: {
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
  getState() {
    return this._state
  },
  setSubscribe(observer) {
    this._subcribe = observer
  }
  ,
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._subcribe(this)
  }
}



window.state = store.getState()
export default store