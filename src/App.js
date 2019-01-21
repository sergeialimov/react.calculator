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
          <div id="7"><p>7</p></div>
          <div id="8"><p>8</p></div>
          <div id="9"><p>9</p></div>
          <div id="minus"><p>–</p></div>
          <div id="4"><p>4</p></div>
          <div id="5"><p>5</p></div>
          <div id="6"><p>6</p></div>
          <div id="plus"><p>+</p></div>
          <div id="1"><p>1</p></div>
          <div id="2"><p>2</p></div>
          <div id="3"><p>3</p></div>
          <div id="equals"><p>=</p></div>
        </div>
      </div>
    );
  }
}

export default App;
