import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="calc">
          <div id="display">
          </div>
          <div id="firstRow">
            <div id="ac">
              <p>AC</p>
            </div>
            <div id="divide"><p>/</p></div>
            <div id="multiply"><p>x</p></div>
          </div>
          <div id="secondRow">
            <div id="7"><p>7</p></div>
            <div id="8"><p>8</p></div>
            <div id="9"><p>9</p></div>
            <div id="minus"><p>–</p></div>
          </div>
          <div id="thirdRow">
          </div>
          <div id="fourthRow">
          </div>
          <div id="fifthRow">
          </div>
          <div id="sixthRow">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
