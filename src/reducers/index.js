import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reservationFormReducer from './reservationFormReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
 

export default combineReducers({
    formValidations: reservationFormReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer 
})

