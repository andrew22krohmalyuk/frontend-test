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
    let handleClickNext = (e) => {
         if(this.state.step === 'one') {
             this.setState({
                 step: 'two'
             })
         } else if (this.state.step === 'two') {
             this.setState({
                 step: 'three'
             })
         }
    }
    let handleClickBack = (e) => {
        if (this.state.step === 'two') {
            this.setState({
                step: 'one'
            })
        }
    }

    if(this.state.step === 'one') {
        Footer = <div className="btn-container">
                        <div className="btn next" onClick={handleClickNext}>Next -></div>
                 </div>;
    } else if(this.state.step === 'two') {
        Footer = <div className="btn-container two">
                        <div className="btn back" onClick={handleClickBack}>Back</div>
                        <div className="btn next" onClick={handleClickNext}>Next -></div>
                 </div>;
    }
    return (
        <div className="app">
            {(this.state.step === 'one' || this.state.step === 'two') ? <h2>Signup</h2> : <h2>Thank You</h2>}
            <ProgressBar value={this.state.step} />
            <Form step={this.state.step}/>
            {Footer}
        </div>
    );
  }
}

export default App;
