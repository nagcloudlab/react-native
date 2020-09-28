

import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            tnrName: ''
        }
    }
    doCount(e) {
        this.setState({ count: this.state.count + 1 })
    }
    display() {
        setTimeout(() => {
            console.log(this.state.count)
        }, 3000);
    }
    // componentDidMount() {
    //     console.log("ClassComponent :: componentDidMount()")
    //     document.title = ` count - ${this.state.count}`
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("ClassComponent :: componentDidUpdate()")
    //     if (prevState.count !== this.state.count) {
    //         console.log('document title change when is new count')
    //         document.title = ` count - ${this.state.count}`
    //     }
    // }
    getTrainerName() {
        this.setState({ tnrName: "Nag" })
    }
    render() {
        let { count, tnrName } = this.state;
        return (
            <div className="alert alert-info">
                <button onClick={e => this.doCount(e)} className="btn btn-primary">hit</button>
                &nbsp;
                <button onClick={e => this.display()} className="btn btn-warning">display count after 3s</button>
                <hr />
                count : {count}
                <hr />
                <button onClick={e => this.getTrainerName()} className="btn btn-dark"> show trainer name</button>
                <hr />
                Name : {tnrName}
                <hr />
            </div>
        );
    }
}

export default ClassComponent;