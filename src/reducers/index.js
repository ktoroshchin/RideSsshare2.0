import { combineReducers } from 'redux';
import reservationReducer from './reservationsReducer';

export default combineReducers({
    reservations: reservationReducer
})

