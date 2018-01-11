import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
<<<<<<< HEAD
import UserReducer from '../reducers/reducer_users'
import LastChatReducer from '../reducers/reducer_chats'
import Messages from '../reducers/reducer_msg'

export default combineReducers({
  routing: routerReducer,
  users: UserReducer,
  chats: LastChatReducer,
  messages: Messages
=======
import loginreducer from './loginreducer'
import UsersReducer from '../reducers/reducer_users'
import userreducer from '../reducers/userreducer'

export default combineReducers({
  users: UsersReducer,
  routing: routerReducer,
  loginreducer,
  userreducer
>>>>>>> debaf9030a9dfe42e12c3a263748069a1db4b2fd
})