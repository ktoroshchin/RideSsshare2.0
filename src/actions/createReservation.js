export const createReservation = (reservation) => {
    console.log(reservation)
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        firestore.collection('reservations').add({
            ...reservation,
            created_at: new Date(),
            isConfirmed: null
        }).then(() => {
            dispatch({type: 'CREATE_RESERVATION', payload: reservation})
        }).catch((err) => {
            dispatch({type: 'CREATE_RESERVATION_ERROR', payload: err})
        })
    }
}