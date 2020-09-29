import React, { Component } from 'react';

import store from '../store'

class TopicList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topics: store.getState().topics
        }
    } 
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({ topics: store.getState().topics })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    renderTopics() {
        let { topics } = this.state
        return topics.map((topic, idx) => {
            return (
                <div style={{cursor:'pointer'}} key={idx} onClick={e=>this.props.onChange(topic)} className="list-group-item">{topic}</div>
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

export default TopicList;