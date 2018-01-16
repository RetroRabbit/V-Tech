export const ADD_FRIEND = 'chats_reducer/ADD_FRIEND'
export const SELECT_FRIEND = 'chats_reducer/SELECT_FRIEND'
export const GET_CONVO = 'chats_reducer/GET_CONVO'
export const APPEND_CONVO = 'chats_reducer/APPEND_CONVO'
export const CHATS_ON_LOAD = 'chats_reducer/CHATS_ON_LOAD'


  const initialState = {
  friends: [{friend_id: 0, name: "Donald Bridle", chat: ["Blah blah blah blah blah blah blah blah"], last_msg: "", msg_times: ["15:56"]},
        {friend_id: 1,
            name: "John Snow",
            chat: ["Was too lazy to type a another message...-_-","Hey, are you free tomorrow evening? Was wondering if you'd be willing to teach me to cook...no ulterior motive 0_0 hehe"], 
            last_msg: "",
            msg_times: ["10:21", "11:38"]},

        {friend_id: 2,
            name: "Shingai Pedzisayi",
            chat: ["This is a radio message...",
                    "Is there still meat in the fridge?"],
            last_msg: "",
            msg_times: ["08:48", "11:08"]},

        {friend_id: 3,
            name: "Michael Dawson",
            chat: [],
            last_msg: "",
            msg_times: [] }],
        
            current_id: "",
            current_name: "",
            current_convo: [],
            current_times: []
        }



export default (state = initialState, action) => {
    switch(action.type) {
        
        case SELECT_FRIEND:
        
        //state.current_id = 
        
        
        return {
                
                ...state,
                msg_set: state.msg_set
            }

        case ADD_FRIEND:
            return {
                ...state
            }

        case GET_CONVO:
            state.current_id = action.payload
            //state.current_name = state.friends.name
            //alert("count " + state.friends[2].name)
            for (var j=0; j<state.friends.length; j++){
               // alert(state.friends[j].friend_id +" = "+state.current_id)
                // eslint-disable-next-line
                if (state.friends[j].friend_id == state.current_id){
                    //alert("The for loop runs")
                    state.current_convo = state.friends[j].chat
                    state.current_name = state.friends[j].name
                    state.current_times = state.friends[j].msg_times
                    break
                }
            }

            //alert(state.current_id)
            return {
                ...state
            }

        case APPEND_CONVO:
        var lastIndex
        //alert("Hours: "+action.payload.msg_time[0]+" - mins: "+action.payload.msg_time[1])
            for (var i=0; i<state.friends.length; i++){
                // eslint-disable-next-line
                if (state.friends[i].friend_id == state.current_id){
                    
                    state.friends[i].chat.push(action.payload.msg)
                    state.friends[i].last_msg = action.payload.msg
                    state.friends[i].msg_times.push(action.payload.msg_time[0]+":"+action.payload.msg_time[1])
                    return {
                    ...state
                    }
                    
                }
                
            }
            return{...state}


        
        case CHATS_ON_LOAD:
            // eslint-disable-next-line
            var lastIndex
            for (i=0; i<state.friends.length; i++){
                lastIndex = state.friends[i].chat.length
                if (lastIndex>0){
                    //alert(state.friends[i].name+": "+lastIndex)
                    //alert(state.friends[i].chat[(state.friends[i].chat.length)-1])
                    state.friends[i].last_msg = state.friends[i].chat[(state.friends[i].chat.length-1)]
                }
            } 
            
            return {...state}

        default:
            return state
    }
}



export const append_chat = (text2) => {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();

        return dispatch => {
            dispatch({
              type: APPEND_CONVO,
              payload: {/*friend_id: state.current_id,*/
              msg: text2,
              msg_time: [hours, minutes]}
        })
    }
}

export const get_convo = (friend_id) => {

    return dispatch => {
        dispatch({
          type: GET_CONVO,
          payload: friend_id
          
    })
}
}

export const chats_on_load = () => {

    return dispatch => {
        dispatch({
            type: CHATS_ON_LOAD
        })
    }
}
