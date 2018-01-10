export const LOGIN_PENDING = 'loginreducer/LOGIN_PENDING'
export const LOGIN_SUCCESS = 'loginreducer/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'loginreducer/LOGIN_FAIL'

const initialState = {
    isLogInPending: false,
    isLogInSucess: false,
    isLogInFail: false
}

export default (state = initialState,action) => {
    switch(action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                isLogInPending: true,
                isLogInSucess: false,
                isLogInFail: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogInPending: false,
                isLogInSucess: true,
                isLogInFail: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLogInPending: false,
                isLogInSucess: false,
                isLogInFail: true
            }
        default:
            return state
    }
}

export const login_successful = () => {
    return dispatch => {
        dispatch({
            type: LOGIN_PENDING
        })

        return setTimeout(() => {
            dispatch({
              type: LOGIN_SUCCESS
            })
        }, 1000)
    }
}

export const login_unsuccessful = () => {
    return dispatch => {
        dispatch({
            type: LOGIN_PENDING
        })

        return setTimeout(() => {
            dispatch({
              type: LOGIN_FAIL
            })
        }, 1000)
    }
}