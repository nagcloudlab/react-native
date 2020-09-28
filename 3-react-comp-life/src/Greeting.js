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
                    <hr/>
                    {new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Kolkata'})}
                </div>
            </div>
        );
    }
    componentDidMount(){
        console.log("Greeting :: componentDidMount()")
        this.interval=setInterval(()=>{
            this.forceUpdate();
        },1000);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("Greeting :: shouldComponentUpdate()")
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Greeting :: componentDidUpdate()")
    }
    componentWillUnmount(){
        clearInterval(this.interval)
        console.log("Greeting :: componentWillUnmount()")
    }
}
export default Greeting;