import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginreducer from './loginreducer'
import UsersReducer from '../reducers/reducer_users'
import userreducer from '../reducers/userreducer'

export default combineReducers({
  users: UsersReducer,
  routing: routerReducer,
  loginreducer,
  userreducer
})