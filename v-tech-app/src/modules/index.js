import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginreducer from './loginreducer'

export default combineReducers({
  routing: routerReducer,
  loginreducer
})