export const authAction = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        })
        .catch((err) => {
            console.log(err.message)
            console.log(err.code)
            dispatch({type: 'LOGIN_ERROR', payload: err})
        })
    }
}