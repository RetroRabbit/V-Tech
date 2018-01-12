import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import LastChatReducer from '../reducers/reducer_chats'
import loginreducer from './loginreducer'
import userreducer from '../reducers/userreducer'
import messages_reducer from '../modules/messages_reducer'
import reducer_convo from '../reducers/reducer_convo'

export default combineReducers({
  users: userreducer,
  routing: routerReducer,
  chats: LastChatReducer,
  loginreducer,
  msgs: messages_reducer,
  messages: reducer_convo,
  userreducer
})