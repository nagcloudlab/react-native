


export function reviewsReducer(state = {}, action) {

    let { type } = action;

    switch (type) {
        case 'LOAD_REVIEWS_SUCCESS': {
            let { itemId, reviews } = action;
            return { ...state, [itemId]: reviews };
        }
        default: return state;
    }

}