
import React, { Component } from 'react';
import Greeting from './Greeting'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  constructor(props) {
    super();
    console.log("App :: constructor()")
    this.state = {
      message: "greetings"
    }
  }
  handleChange(e, message) {
    this.setState({ message })
  };
  render() {
    console.log("App :: render()")
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{"react - comp-life"}</h1>
        <hr />
        <button onClick={e => this.handleChange(e, 'good morning')} className="btn btn-primary">GM</button>
        <button onClick={e => this.handleChange(e, 'good noon')} className="btn btn-primary">GN</button>
        <button onClick={e => this.handleChange(e, 'good evening')} className="btn btn-primary">GE</button>
        <button onClick={e => this.handleChange(e, '')} className="btn btn-danger">remove</button>
        <hr />
        {message?<Greeting message={message} />:null}
      </div>
    );

  }
  componentDidMount(){
    console.log("App :: componentDidMount()")
  }
  shouldComponentUpdate(){
    console.log("App :: shouldComponentUpdate()")
    return true;
}
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("App :: componentDidUpdate()")
}
}

export default App;

