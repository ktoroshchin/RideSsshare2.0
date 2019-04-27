export const driverIdValidator = (reservation) => {
    return (dispatch) => {
        if(reservation.driver_id !== ''){
            return dispatch({type: 'DRIVER_ID_VALID'})
        } 
        return dispatch({type: 'DRIVER_ID_INVALID', payload: 'Please choose your driver'})
    }
}

export const clientNameValidator = (reservation) => {
    return(dispatch) => {
        if(reservation.name !== ''){
            return dispatch({type: 'CLIENT_NAME_VALID'})
        }
        return dispatch({type: 'CLIENT_NAME_INVALID', payload: 'Name is required'})
    }
}

export const clientEmailValidator = (reservation) => {
    return(dispatch) => {
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]*$/g
        if(regex.test(reservation.email)){
            return dispatch({type: 'CLIENT_EMAIL_VALID'})
        }
        else if (reservation.email === ''){
            return dispatch({type: 'CLIENT_EMAIL_INVALID', payload: 'Email is required'})
        }
        return dispatch({type: 'CLIENT_EMAIL_INVALID', payload: 'Invalid email or use of restricted symbols, please try again.'})
    }
}

export const clientPhoneValidator = (reservation) => {
    return(dispatch) => {
        const regex = /^[0-9]{10}$/g
        if(regex.test(reservation.phone_number)){
            return dispatch({type: 'CLIENT_PHONE_VALID'})
        }
        else if(reservation.phone_number === ''){
            return dispatch({type: 'CLIENT_PHONE_INVALID', payload: 'Phone number is required'})
        }
        return dispatch({type: 'CLIENT_PHONE_INVALID', payload: 'Phone must be 10 digit number (-,() symbols NOT ALLOWED) format Example: 1112223434 ' })
    }
}

export const destinationValidator = (reservation) => {
    return(dispatch) => {
        if(reservation.destination !== ''){
            return dispatch({type: 'DESTINATION_VALID'})
        }
        return dispatch({type: 'DESTINATION_INVALID', payload: 'Destination is required'})
    }
}

export const departureFromValidator = (reservation) => {
    return(dispatch) => {
        if(reservation.departure_from !== ''){
            return dispatch({type: 'DEPARTURE_FROM_VALID'})
        }
        return dispatch({type: 'DEPARTURE_FROM_INVALID', payload: 'Departure location is required'})
    }
}

export const departureTimeValidator = (reservation) => {
    return(dispatch) => {
        if(reservation.departure_time !== ''){
            return dispatch({type: 'DEPARTURE_TIME_VALID'})
        }
        return dispatch({type: 'DEPARTURE_TIME_INVALID', payload: 'Departure time is required'})
    }
}

export const departureDateValidator = (reservation) => {
    return(dispatch) => {
        if(reservation.departure_date !== ''){
            return dispatch({type: 'DEPARTURE_DATE_VALID'})
        }
        return dispatch({type: 'DEPARTURE_DATE_INVALID', payload: 'Departure date is required'})
    }
}

export const numberOfPassValidator = (reservation) => {
    return(dispatch) => {
        if(reservation.number_of_passengers !== ''){
            return dispatch({type: 'NUM_OF_PASSENGERS_VALID'})
        }
        return dispatch({type: 'NUM_OF_PASSENGERS_INVALID', payload: 'Please select number of passengers'})
    }
}

export const commentsValidator = (reservation) => {
    return(dispatch) => {
        if(reservation.comments.length < 250){
            return dispatch({type: 'COMMENTS_VALID'})
        }
        return dispatch({type: 'COMMENTS_INVALID', payload: 'Max length is 250 characters'})
    }
}






