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
            <div id="ac">AC</div>
            <div id="divide"></div>
            <div id="multiply"></div>
          </div>
          <div id="secondRow">
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
