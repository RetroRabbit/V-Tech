export const ADD_FRIEND = 'chats_reducer/ADD_FRIEND'
export const SELECT_FRIEND = 'chats_reducer/SELECT_FRIEND'
export const GET_CONVO = 'chats_reducer/GET_CONVO'
export const APPEND_CONVO = 'chats_reducer/APPEND_CONVO'


  const initialState = {
  friends: [{friend_id: 0, name: "Donald Bridle", chat: ["Blah blah blah blah blah blah blah blah"], last_msg: "Blah blah blah blah blah blah blah blah"},
        {friend_id: 1,
            name: "John Snow",
            chat: ["Was too lazy to type a another message...-_-","Hey, are you free tomorrow evening? Was wondering if you'd be willing to teach me to cook...no ulterior motive 0_0 hehe"], 
            last_msg: "Hey, are you free tomorrow evening? Was wondering if you'd be willing to teach me to cook...no ulterior motive 0_0 hehe"},

        {friend_id: 2,
            name: "Shingai Pedzisayi",
            chat: ["This is a radio message...",
                    "Is there still meat in the fridge?"],
            last_msg: "Is there still meat in the fridge?"},

        {friend_id: 3,
            name: "Michael Dawson",
            chat: [],
            last_msg: "" }],
        
            current_id: "",
            current_name: "",
            current_convo: []
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
                    break
                }
            }

            //alert(state.current_id)
            return {
                ...state
            }

        case APPEND_CONVO:
            for (var i=0; i<state.friends.length; i++){
                // eslint-disable-next-line
                if (state.friends[i].friend_id == state.current_id){
                    
                    state.friends[i].chat.push(action.payload.msg)
                    return {
                    ...state
                    }
                    
                }
                
            }
            return{...state}

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
