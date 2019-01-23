import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
    }
    this.addNumber = this.addNumber.bind(this);
  }

  addNumber = (newNum) => (e) => {
    this.setState({
      num: `${this.state.num}${newNum}`,
    });
  }

  render() {
    const defaultValue = this.state.num ? this.state.num : 0;
    return (
      <div className="App">
        <div id="calc">
          <div id="display"><p>{defaultValue}</p>
          </div>
          <div id="ac">
            <p>AC</p>
          </div>
          <div id="divide" className="operations"><p>/</p></div>
          <div id="multiply" className="operations"><p>x</p></div>
          <div id="7" className="numbers" onClick={this.addNumber(7)}><p>7</p></div>
          <div id="8" className="numbers"><p>8</p></div>
          <div id="9" className="numbers"><p>9</p></div>
          <div id="minus" className="operations"><p>–</p></div>
          <div id="4" className="numbers"><p>4</p></div>
          <div id="5" className="numbers"><p>5</p></div>
          <div id="6" className="numbers"><p>6</p></div>
          <div id="plus" className="operations"><p>+</p></div>
          <div id="1" className="numbers"><p>1</p></div>
          <div id="2" className="numbers"><p>2</p></div>
          <div id="3" className="numbers"><p>3</p></div>
          <div id="equals" className="operations"><p>=</p></div>
          <div id="zero" className="numbers"><p>0</p></div>
          <div id="dot" className="numbers"><p>.</p></div>
        </div>
      </div>
    );
  }
}

export default App;
