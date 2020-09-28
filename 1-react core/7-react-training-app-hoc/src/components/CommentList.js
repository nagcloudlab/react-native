import React, { Component } from 'react';

import { connect } from '../react-store'

class CommentList extends Component {
    renderComments() {
        let { comments } = this.props
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

function mapStateToProps(state, props) {
    let { topic } = props;
    return {
        comments: state.comments[topic] || []
    }
}

export default connect(mapStateToProps)(CommentList);