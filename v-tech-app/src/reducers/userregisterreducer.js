export const REGISTERED = 'userregisterreducer/REGISTERED'
export const CHANGEDP = 'userregisterreducer/CHANGEDP'
export const PICTURE = '../containers/chats/profile/kitten.jpg'
export const FRIENDMAIL = 'userregisterreducer/FRIENDMAIL'
export const ONLINE = 'userregisterreducer/ONLINE'
export const OFFLINE = 'userregisterreducer/OFFLINE'

const initialState = {
    name: "",
    email: "",
    password: "",
    imageurl: PICTURE,
    friendmail: ""
    
}

export default (state = initialState,action) => {
    switch(action.type) {
        
        case REGISTERED:
            return {
                ...state,
                name: action.username,
                email: action.useremail,
                password: action.userpassword
            }
        case CHANGEDP:
        console.log("Comes to CHANGEDP reducer");
            return {
                ...state,
                imageurl: action.userimageurl
            }
        case FRIENDMAIL:
            return {
                ...state,
                friendmail: action.userfriendmail
            }
        case ONLINE:
        console.log("Comes to ONLINE reducer");
            return {
                ...state,
                email: action.useremail,
                password: action.userpassword
            }
        case OFFLINE:
            return {
                ...state,
                name: action.useremail,
                email: action.useremail,
                password: action.userpassword,
                imageurl: action.userimageurl,
                friendmail: action.userfriendmail
            }
        default:
            return state
    }
}

export function Register(name,email,password) {
    return dispatch => {
        dispatch({
            type: REGISTERED,
            username: name,
            useremail: email,
            userpassword: password,
        })
    }
}

export function ChangeDp(imageurl) {
    console.log("Comes to ChangeDP");
    return dispatch => {
        dispatch({
            type: CHANGEDP,
            userimageurl: imageurl
        })
    }
}

export function FriendMail(friendmail) {
    return dispatch => {
        dispatch({
            type: FRIENDMAIL,
            userfriendmail: friendmail
        })
    }
}

export function Online(email,password) {
    console.log("Comes to Online");
    return dispatch => {
        dispatch({
            type: ONLINE,
            useremail: email,
            userpassword: password
        })
    }
}

export function Offline() {
    return dispatch => {
        dispatch({
            type: OFFLINE,
            username: "",
            useremail: "",
            userpassword: "",
            userimageurl: "",
            userfriendmail: ""
        })
    }
}
