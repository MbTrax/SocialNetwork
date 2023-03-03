const ADD_POST = 'ADD-POST'
const NEW_POST_CHANGE = 'NEW-POST-CHANGE'
const ADD_LIKE = 'ADD-LIKE'

let initialState = {
        newPostText: '',
        postsData: [
          { id: '1', message: 'Make in your DREAMS!', likeCount: 34, image: 'https://coolsen.ru/wp-content/uploads/2021/09/image143-6.jpg' },
          { id: '2', message: 'Do it!', likeCount: 10, image: 'https://i.pinimg.com/originals/18/c7/2c/18c72c635bcd4bddad6c6f27ab365aad.jpg' },
        ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let item = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
                image: 'https://damion.club/uploads/posts/2022-03/1646255026_29-damion-club-p-anime-tyan-na-avu-v-stime-art-31.jpg'
            }
            state.postsData.push(item)
            state.newPostText = ''
            return state
        case NEW_POST_CHANGE:
            state.newPostText = action.newText
            return state
        case ADD_LIKE:
            state.postsData.find(post => post.id === action.id).likeCount += 1
            return state
        default: return state
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const newPostChangeActionCreater = (text) => ({type: NEW_POST_CHANGE, newText: text})
export const addLikeActionCreater = (id) => ({type: ADD_LIKE, id: id})

export default profileReducer