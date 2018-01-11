export const ONLINE = 'userreducer/ONLINE'
export const OFFLINE = 'userreducer/OFFLINE'

const initialState = {
    name: "",
    email: ""
}

export default (state = initialState,action) => {
    switch(action.type) {
        case ONLINE:
            return {
                ...state,
                name: action.username,
                email: action.useremail
            }
        case OFFLINE:
            return state
        default:
            return state
    }
}

export function Online(name,email){
    return dispatch => {
        dispatch({
            type: ONLINE,
            username: name,
            useremail: email
        })
    }
}

