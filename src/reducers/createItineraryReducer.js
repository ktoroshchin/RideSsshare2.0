const createItineraryReducer = (state = [], action) => {
    switch(action.type){
        case 'CREATE_ITINERARY_SUCCESS':
            return [...state, action.payload]
        case 'CREATE_ITINERARY_ERROR':
            return state;
        default:
            return state;
    }
}
export default createItineraryReducer;