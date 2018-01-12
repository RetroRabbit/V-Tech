export const MSG_SENT = 'msg_reducer/GET_MSG'

const initialState = {
    the_msg: ""
}

export default (state = initialState,action) => {
    switch(action.type) {
        
        case GET_MSG:
            return {
                ...state,
                the_msg: state.m.push(action.message)
            }
       
        default:
            return state
    }
}

export const msg_successful = (text2) => {

        return dispatch => {
            dispatch({
              type: MSG_SENT,
              id: 4,
              message: text2
        })
    }
}
