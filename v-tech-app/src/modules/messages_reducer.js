export const SEND = 'messages_reducer/SEND'
export const GET_ALL = 'messages_reducer/GET_ALL'


  const initialState = {
  msg_set: [{id: 1,  msg: "This is a radio message...", msg_time:""},
  {id: 2, friend_id: 1, msg: "Another one", msg_time:""},
  {id: 3, friend_id: 3, msg: "The last", msg_time:""},
  {id: 4, friend_id: 3, msg: "Why do you keep ignoring me?", msg_time:""},
  {id: 5, friend_id: 3, msg: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah", msg_time:""},
  {id: 6, friend_id: 4, msg: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah", msg_time:""},
  {id: 7, friend_id: 4, msg: "Was too lazy to type a another message...-_-", msg_time:""}]
                        }


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

export const msg_successful = (msg_id, text2, recipient) => {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();

        return dispatch => {
            dispatch({
              type: SEND,
              payload: {id: msg_id,
              friend_id: recipient,
              msg: text2,
              msg_time: [hours, minutes]
              }
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
