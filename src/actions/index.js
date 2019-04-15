export const createReservation = (data) => {
    return (dispatch, getState) => {
        //submit data to firebase
        dispatch({type: 'CREATE_RESERVATION', payload: data})
    }
}

