
import React, { Component } from 'react';
import Greeting from './Greeting'
import RajComponent from './RajComponent';

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
    let { title } = this.props;
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{title}</h1>
        <hr />
        <button onClick={e => this.handleChange(e, 'good morning')} className="btn btn-primary">GM</button>
        <button onClick={e => this.handleChange(e, 'good noon')} className="btn btn-primary">GN</button>
        <button onClick={e => this.handleChange(e, 'good evening')} className="btn btn-primary">GE</button>
        <hr />
        <Greeting message={message} />
        <hr/>
        <RajComponent />
      </div>
    );

  }
}

export default App;

