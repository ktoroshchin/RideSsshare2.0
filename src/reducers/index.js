import { combineReducers } from 'redux';
import reservationReducer from './reservationsReducer';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
    reservations: reservationReducer,
    firestore: firestoreReducer
})

