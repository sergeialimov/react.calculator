import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      operation: '',
      display: '',
      tmp: 0,
    }
    this.addNumber = this.addNumber.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.clear = this.clear.bind(this);
    this.calc = this.calc.bind(this);
  }

  addNumber = (newNum) => (e) => {
    this.setState({
      num: `${this.state.num}${newNum}`,
      display: `${this.state.num}${newNum}`,
    });
  }

  clear() {
    this.setState({
      num: 0,
      display: '',
    });
  }

  addOperation = (newOperation) => (e) => {
    this.setState({
      operation: newOperation,
      display: newOperation,
      tmp: this.state.num,
      num: 0,
    });
  }

  calc() {
    const result = parseFloat(this.state.tmp) - parseFloat(this.state.num);
    this.setState({
      display: result,
      operation: '',
      num: result,
      tmp: 0,
      res: result,
    });
  }

  render() {
    const defaultValue = this.state.display ? this.state.display : '';
    return (
      <div className="App">
        <div id="calc">
          <div id="display"><p id="displayText">{defaultValue}</p>
          </div>
          <div id="ac" onClick={this.clear}>
            <p>AC</p>
          </div>
          <div id="divide" className="operations" onClick={this.addOperation('/')}><p>/</p></div>
          <div id="multiply" className="operations" onClick={this.addOperation('x')}><p>x</p></div>
          <div id="7" className="numbers" onClick={this.addNumber(7)}><p>7</p></div>
          <div id="8" className="numbers" onClick={this.addNumber(8)}><p>8</p></div>
          <div id="9" className="numbers" onClick={this.addNumber(9)}><p>9</p></div>
          <div id="minus" className="operations" onClick={this.addOperation('-')}><p>–</p></div>
          <div id="4" className="numbers" onClick={this.addNumber(4)}><p>4</p></div>
          <div id="5" className="numbers" onClick={this.addNumber(5)}><p>5</p></div>
          <div id="6" className="numbers" onClick={this.addNumber(6)}><p>6</p></div>
          <div id="plus" className="operations" onClick={this.addOperation('+')}><p>+</p></div>
          <div id="1" className="numbers" onClick={this.addNumber(1)}><p>1</p></div>
          <div id="2" className="numbers" onClick={this.addNumber(2)}><p>2</p></div>
          <div id="3" className="numbers" onClick={this.addNumber(3)}><p>3</p></div>
          <div id="equals" className="operations" onClick={this.calc}><p>=</p></div>
          <div id="zero" className="numbers" onClick={this.addNumber(0)}><p>0</p></div>
          <div id="dot" className="numbers" onClick={this.addNumber('.')}><p>.</p></div>
        </div>
      </div>
    );
  }
}

export default App;
