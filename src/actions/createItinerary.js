export const createItinerary = (itinerary) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const uid = getFirebase().auth().currentUser.uid
        const firestore = getFirestore();
        firestore.collection('users')
        .doc(uid)
        .update({
            itineraries: 
                firestore.FieldValue.arrayUnion({
                    ...itinerary,
                    departure_time: itinerary.departure_time.split(","), 
                    created_at: new Date()})
            })
        .then(() => dispatch({type: 'CREATE_ITINERARY_SUCCESS', payload: itinerary}))
        .catch((err) => dispatch({type: 'CREATE_ITINERARY_ERROR', payload: err}) )
    }
}