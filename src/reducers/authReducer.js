const initState = {
    authError: null
}

const authReducer = (state = initState , action) => {
    switch (action.type){
        case 'LOGIN_ERROR':
            return {...state, authError: 'Wrong email or Password'}
        case 'LOGIN_SUCCESS':
            return {...state, authError: null}
        case 'LOGOUT_SUCCESS':
            return state
        default:
            return state;
    }
}

export default authReducer;

