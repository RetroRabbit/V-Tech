import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import UserReducer from '../reducers/reducer_users'
import LastChatReducer from '../reducers/reducer_chats'

export default combineReducers({
  routing: routerReducer,
  users: UserReducer,
  chats: LastChatReducer
})