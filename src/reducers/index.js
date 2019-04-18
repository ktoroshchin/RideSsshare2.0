import { combineReducers } from 'redux';
import reservationReducer from './reservationsReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    reservations: reservationReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer 
})

