

export function loadItems(type, page) {

    return function (dispatch) {
        // async
        dispatch({ type: 'REQUEST_BEGIN', message: "Loading items" })
        const apiUrl = "http://localhost:8080/api/items"
        let promise = fetch(apiUrl)
        promise
            .then(response => response.json())
            .then(products => {
                dispatch({ type: 'REQUEST_FINISHED', message: "" })
                dispatch({ type: 'LOAD_ITEMS_SUCCESS', items: products })
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_ERROR', message: err.message })
            })

    }

}


export function loadReviews(itemId) {

    return function (dispatch) {
        // async
        const apiUrl = "http://localhost:8080/api/items/" + itemId + "/reviews"
        let promise = fetch(apiUrl)
        promise
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews })
            })

    }

}
