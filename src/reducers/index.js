import { combineReducers } from 'redux';
import reservationReducer from './reservationsReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    auth: authReducer,
    reservations: reservationReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer 
})

