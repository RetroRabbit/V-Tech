import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loginreducer from './loginreducer'

import messages_reducer from '../modules/messages_reducer'
import reducer_convo from '../reducers/reducer_convo'
import chats_reducer from '../modules/chats_reducer'
import userregisterreducer from './userregisterreducer'

export default combineReducers({
  routing: routerReducer,
  loginreducer,
  msgs: messages_reducer,
  messages: reducer_convo,
  userregisterreducer,
  chats: chats_reducer

})
