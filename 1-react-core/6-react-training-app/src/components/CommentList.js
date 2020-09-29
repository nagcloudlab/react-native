import React, { Component } from 'react';

import store from '../store'

class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: store.getState().comments[props.topic] || []
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({ topics: store.getState().comments[this.props.topic] || [] })
        })
    }
    componentDidUpdate(nextProps, nextState) {
        if (nextProps.topic !== this.props.topic) {
            const comments = store.getState().comments[this.props.topic] || []
            this.setState({ comments })
        }
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    renderComments() {
        let { comments } = this.state
        return comments.map((comment, idx) => {
            return (
                <div key={idx} className="list-group-item">{comment}</div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Comment List</div>
                    <div className="card-body">
                        {this.renderComments()}
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentList;