import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginreducer from './loginreducer'
import userregisterreducer from './userregisterreducer'

export default combineReducers({
  routing: routerReducer,
  userregisterreducer,
  loginreducer
})