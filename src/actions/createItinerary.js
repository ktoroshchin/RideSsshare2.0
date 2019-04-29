export const createItinerary = (itinerary) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const uid = getFirebase().auth().currentUser.uid
        const firestore = getFirestore();
        firestore.collection('users')
            .doc(uid)
            .set({
                uid,
                itinerary: {
                    departure_from: itinerary.departure_from
                 }}, {merge: true})
        .then(() => dispatch({type: 'CREATE_ITINERARY_SUCCESS', payload: itinerary}))
        .catch((err) => dispatch({type: 'CREATE_ITINERARY_ERROR', payload: err}) )
    }
}