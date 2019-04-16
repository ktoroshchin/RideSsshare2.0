export const createReservation = (reservation) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        firestore.collection('reservations').add({
            ...reservation,
            created_at: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_RESERVATION', payload: reservation})
        }).catch((err) => {
            dispatch({type: 'CREATE_RESERVATION_ERROR', payload: err})
        })
    }
}

