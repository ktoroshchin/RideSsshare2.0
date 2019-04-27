const initState = {
    driver_id_error:null,
    name_error:null,
    email_error:null,
    phone_number_error:null,
    destination_error:null,
    departure_from_error:null,
    departure_time_error:null,
    departure_date_error:null,
    number_of_passengers_error:null,
    comments_error: null
}

const reservationFormReducer = (state=initState, action) => {
    switch(action.type){
        case 'DRIVER_ID_VALID':
            return {...state, driver_id_error: null};
        case 'CLIENT_NAME_VALID':
            return {...state, name_error: null};
        case 'CLIENT_EMAIL_VALID':
            return {...state, email_error: null};
        case 'CLIENT_PHONE_VALID':
            return {...state, phone_number_error: null};
        case 'DESTINATION_VALID':
            return {...state, destination_error: null};
        case 'DEPARTURE_FROM_VALID':
            return {...state, departure_from_error: null};
        case 'DEPARTURE_TIME_VALID':
            return {...state, departure_time_error: null};
        case 'DEPARTURE_DATE_VALID':
            return {...state, departure_date_error: null};
        case 'NUM_OF_PASSENGERS_VALID':
            return {...state, number_of_passengers_error: null};
        case 'COMMENTS_VALID':
            return {...state, comments_error: null};

        case 'DRIVER_ID_INVALID':
            return {...state, driver_id_error: action.payload};
        case 'CLIENT_NAME_INVALID':
            return {...state, name_error: action.payload}    
        case 'CLIENT_EMAIL_INVALID':
            return {...state, email_error: action.payload};
        case 'CLIENT_PHONE_INVALID':
            return {...state, phone_number_error: action.payload};
        case 'DESTINATION_INVALID':
            return {...state, destination_error: action.payload};
        case 'DEPARTURE_FROM_INVALID':
            return {...state, departure_from_error: action.payload};
        case 'DEPARTURE_TIME_INVALID':
            return {...state, departure_time_error: action.payload};
        case 'DEPARTURE_DATE_INVALID':
            return {...state, departure_date_error: action.payload};
        case 'NUM_OF_PASSENGERS_INVALID':
            return {...state, number_of_passengers_error: action.payload};   
        case 'COMMENTS_INVALID':
            return {...state, comments_error: action.payload};
        default:
            return state
    }
}

export default reservationFormReducer