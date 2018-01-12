export const SEND = 'messages_reducer/SEND'
export const GET_ALL = 'messages_reducer/GET_ALL'


  const initialState = {
  msg_set: [{id: 1, msg: "This is a radio message..."},
  {id: 2, msg: "Another one"},
  {id: 3, msg: "The last"}]}


export default (state = initialState, action) => {
    switch(action.type) {
        
        case SEND:
        //console.log("Okay")
        console.log(state)
        state.msg_set.push(action.payload)
            return {
                
                ...state,
                msg_set: state.msg_set
            }

        case GET_ALL:
            return {
                ...state,
                all_msgs: [state]
            }


        default:
            return state
    }
}

export const msg_successful = (text2) => {

        return dispatch => {
            dispatch({
              type: SEND,
              payload: {id: 4,
              msg: text2}
        })
    }
}

export const get_all_msgs = () => {

    return dispatch => {
        dispatch({
          type: GET_ALL,
          
    })
}
}
