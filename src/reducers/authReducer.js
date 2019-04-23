const initState = {
    authError: null
}

const authReducer = (state = initState , action) => {
    switch (action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {...state, authError: 'Wrong email or Password'}
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {...state, authError: null}
        case 'LOGOUT_SUCCESS':
            console.log('logout success');    
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {...state, authError: null}
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {...state, authError: action.payload.err}
        case 'CR_USER_ON_SOCIAL_LOGIN_SUCCESS':
            console.log('successfully created user on social login');
            return {...state, authError: null}
        case 'CR_USER_ON_SOCIAL_LOGIN_ERROR':
            console.log('create user on social login error');
            return {...state, authError: action.payload.err}
        default:
            return state;
    }
}

export default authReducer;

