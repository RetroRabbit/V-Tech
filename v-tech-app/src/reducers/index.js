import { combineReducers} from 'redux'
import UserReducer from './reducer_users'
import LastChatReducer from './reducer_chats'

const allReducers = combineReducers({
    users: UserReducer,
    chats: LastChatReducer
});

export default allReducers