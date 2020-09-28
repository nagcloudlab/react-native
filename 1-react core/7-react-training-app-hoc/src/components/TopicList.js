import React, { Component } from 'react';

import { connect } from '../react-store'

class TopicList extends Component {
    renderTopics() {
        let { topics } = this.props
        return topics.map((topic, idx) => {
            return (
                <div style={{ cursor: 'pointer' }} key={idx} onClick={e => this.props.onChange(topic)} className="list-group-item">{topic}</div>
            )
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">Topic List</div>
                <div className="card-body">
                    {this.renderTopics()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}

export default connect(mapStateToProps)(TopicList)