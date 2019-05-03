export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => { dispatch({type: 'LOGIN_SUCCESS'}) })
        .catch((err) => { dispatch({type: 'LOGIN_ERROR', payload: err}) })
    }
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => { dispatch({type: 'LOGOUT_SUCCESS'}) })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((response) => {
            console.log(response)
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.first_name,
                lastName: newUser.last_name,
                initials: newUser.first_name[0] + newUser.last_name[0]
            })
        })
        .then(() => { dispatch({type: 'SIGNUP_SUCCESS'}) })
        .catch((err) => { dispatch({type: 'SIGNUP_ERROR', payload: err}) })
    }
}

export const crDbUserOnSocialLogin = (user) => {
    return (dispatch, getState, { getFirestore }) => {
        const userFullName = user.displayName.split(" ");
        const firestore = getFirestore();
        firestore.collection('users').doc(user.uid).set({
            firstName: userFullName[0],
            lastName: userFullName[1],
            initials: userFullName[0][0] + userFullName[1][0]
        },{merge:true})
        .then(() => { dispatch({ type: 'CR_USER_ON_SOCIAL_LOGIN_SUCCESS'}) })
        .catch((err) => { dispatch({ type: 'CR_USER_ON_SOCIAL_LOGIN_ERROR' }) })
    }
}







