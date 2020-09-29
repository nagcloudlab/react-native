

const store = {
    _state: {
        topics: [
            "react",
            "angular",
            "vue.js"
        ],
        comments: {
            "react": [
                "react-comment-1",
                "react-comment-2",
                "react-comment-3"
            ],
            "angular": [
                "angular-comment-1",
                "angular-comment-2",
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(listener) {
        //subscription
        return function () {
            // unsubscribtion
        }
    }
}


export default store;