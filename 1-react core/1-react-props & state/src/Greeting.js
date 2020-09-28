import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        console.log("Greeting :: constructor()")
    }
    render() {
        console.log("Greeting :: render()")
        let { message } = this.props;
        let className = "alert alert-info"
        return (
            <div>
                <div className={className}>
                    {message}
                </div>
            </div>
        );
    }
}
export default Greeting;