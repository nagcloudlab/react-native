

export function loadItems(type, page) {

    return function (dispatch) {

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

        // const items = [
        //     {
        //         id: 1,
        //         name: 'Laptop-1',
        //         price: 1000.00,
        //         canBuy: true,
        //         description: 'New Laptop pro',
        //         imageUri: 'https://www.freepnglogos.com/uploads/laptop-png/laptop-png-who-are-adventoris-4.png'
        //     },
        //     {
        //         id: 2,
        //         name: 'Laptop-2',
        //         price: 500.00,
        //         canBuy: true,
        //         description: 'New Laptop pro',
        //         imageUri: 'https://www.freepnglogos.com/uploads/laptop-png/laptop-png-who-are-adventoris-4.png'
        //     },
        // ]

        // dispatch({ type: 'LOAD_ITEMS_SUCCESS', items: items })

    }

}


export function loadReviews(itemId) {

    return function (dispatch) {

        const apiUrl = "http://localhost:8080/api/items/" + itemId + "/reviews"
        let promise = fetch(apiUrl)
        promise
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews })
            })

        // const reviews = [
        //     { author: 'who1', stars: 5, body: 'sample-review-1' },
        //     { author: 'who2', stars: 3, body: 'sample-review-2' },
        // ]

        // dispatch({ type: 'LOAD_REVIEWS_SUCCESS', itemId, reviews })
    }

}
