import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import LastChatReducer from '../reducers/reducer_chats'
import loginreducer from './loginreducer'
import userreducer from '../reducers/userreducer'

export default combineReducers({
  routing: routerReducer,
  chats: LastChatReducer,
  loginreducer,
  userreducer

})