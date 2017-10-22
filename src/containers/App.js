import React, { Component } from 'react';
import Form from "../Form";
import ProgressBar from '../components/ProgressBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 'one'};
  }

  render() {
    let Footer;
    if(this.state.step === 'one') {
        Footer = <p>Footer one</p>;
    } else {
        Footer = <p>Footer</p>;
    }
    return (
        <div className="app">
            <h2>Sign up</h2>
            <ProgressBar />
            <Form/>
            {Footer}
        </div>
    );
  }
}

export default App;
