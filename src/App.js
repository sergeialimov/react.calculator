import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="calc">
          <div id="display">
          </div>
          <div id="ac">
            <p>AC</p>
          </div>
          <div id="divide"><p>/</p></div>
          <div id="multiply"><p>x</p></div>
          <div id="7" className="numbers"><p>7</p></div>
          <div id="8" className="numbers"><p>8</p></div>
          <div id="9" className="numbers"><p>9</p></div>
          <div id="minus"><p>–</p></div>
          <div id="4" className="numbers"><p>4</p></div>
          <div id="5" className="numbers"><p>5</p></div>
          <div id="6" className="numbers"><p>6</p></div>
          <div id="plus"><p>+</p></div>
          <div id="1" className="numbers"><p>1</p></div>
          <div id="2" className="numbers"><p>2</p></div>
          <div id="3" className="numbers"><p>3</p></div>
          <div id="equals"><p>=</p></div>
          <div id="zero" className="numbers"><p>0</p></div>
          <div id="dot" className="numbers"><p>.</p></div>
        </div>
      </div>
    );
  }
}

export default App;
