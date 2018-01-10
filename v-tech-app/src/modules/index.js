import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginreducer from './loginreducer'
import UserReducer from '../reducers/reducer_users'

export default combineReducers({
  users: UserReducer,
  routing: routerReducer,
  loginreducer
})