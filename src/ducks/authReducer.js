const initialState = {
    isLoggedIn: false,
    firstName: '',
    email: ''
}

const LOGIN_USER = 'LOGIN_USER'
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function loginUser(data) {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export function getUser(data) {
    return {
        type: GET_USER,
        payload: data
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: null
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER: {
            const { first_name, email } = action.payload
            return { ...state, isLoggedIn: true, firstName: first_name, email: email }
        }
        case GET_USER: {
            const { first_name, email } = action.payload
            return { ...state, isLoggedIn: true, firstName: first_name, email: email }
        }
        case LOGOUT_USER: {
            return initialState
        }
        default: return state
    }
}