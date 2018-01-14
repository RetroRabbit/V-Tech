import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loginreducer from './loginreducer'
import userreducer from '../reducers/userreducer'
import messages_reducer from '../modules/messages_reducer'
import reducer_convo from '../reducers/reducer_convo'
import chats_reducer from '../modules/chats_reducer'

export default combineReducers({
  users: userreducer,
  routing: routerReducer,
  loginreducer,
  msgs: messages_reducer,
  messages: reducer_convo,
  chats: chats_reducer,
  userreducer
})