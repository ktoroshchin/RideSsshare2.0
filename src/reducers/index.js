import { combineReducers } from 'redux';
import reservationReducer from './reservationsReducer';
import authReducer from './authReducer';
// import createItineraryReducer from './createItineraryReducer';
import reservationFormReducer from './reservationFormReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
 

export default combineReducers({
    formValidations: reservationFormReducer,
    auth: authReducer,
    reservations: reservationReducer,
    // itineraries: createItineraryReducer, 
    firestore: firestoreReducer,
    firebase: firebaseReducer 
})

