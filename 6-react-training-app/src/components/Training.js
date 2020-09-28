import React, { Component } from 'react';

import TopicList from './TopicList'
import CommentList from './CommentList'

class Training extends Component {
    state = {
        topic: null
    }
    changeTopic(topic) {
        this.setState({ topic })
    }
    render() {
        let { topic } = this.state
        return (
            <div>

                <div className="row">
                    <div className="col-6">
                        <TopicList onChange={topic => this.changeTopic(topic)} />
                    </div>
                    <div className="col-6">
                        <CommentList topic={topic} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Training;