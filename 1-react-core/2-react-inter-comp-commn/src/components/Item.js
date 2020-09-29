import React, { Component } from 'react';
import './Item.css'

/**
 * 
 * author : you
 * 
 */

class Item extends Component {
    state = {
        votes: 0
    }
    doIncOrDec(v) {
        this.setState({ votes: this.state.votes + v })
        let { onVote } = this.props;
        if (onVote)
            onVote({ type: v > 0 ? 'like': 'dislike'})
    }
    render() {
        let { value } = this.props
        let { votes } = this.state
        return (
            <div className="item">
                <div className="card card-body">
                    <hr />
                    {value}
                    <hr />
                    <span className="badge badge-dark">{votes}</span>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <button onClick={e => this.doIncOrDec(1)} className="btn btn-primary">Like</button>
                        </div>
                        <div className="col-4">
                            <button onClick={e => this.doIncOrDec(-1)} className="btn btn-danger">Dislike</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;