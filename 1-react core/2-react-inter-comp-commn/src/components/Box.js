import React, { Component } from 'react';
import Item from './Item';
import Summary from './Summary';

/**
 *  author : me
 * 
 */

class Box extends Component {

    state = {
        totalVotes: 0
    }

    // constructor(props){
    //     super(props)
    //     this.handleVote=this.handleVote.bind(this)
    // }

    handleVote(e) {
        let v = e.type === "like" ? 1 : -1
        // console.log(this)
        this.setState({ totalVotes: this.state.totalVotes + v })
    }

    render() {
        let { title } = this.props;
        let { totalVotes } = this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                        <Item value={'React'} onVote={e=>this.handleVote(e)} />
                        <Item value={'Angular'} onVote={e=>this.handleVote(e)} />
                        <div style={{ clear: 'both' }}>
                            <hr />
                            <Summary value={totalVotes} />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Box;