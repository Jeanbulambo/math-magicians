import React from 'react';
import '../Style.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <div className="result-container">
          <input type="text" className="cal-display" />
        </div>
        <div className="buttons-wrapper">
          <div className="row-one">
            <button variant="text" type="button" className="btn1">AC</button>
            <button variant="text" type="button" className="btn1">+/-</button>
            <button variant="text" type="button" className="btn1">%</button>
            <button variant="text" type="button" className="btn-signe">*</button>
          </div>
          <div className="row-two">
            <button variant="text" type="button" className="btn1">7</button>
            <button variant="text" type="button" className="btn1">8</button>
            <button variant="text" type="button" className="btn1">9</button>
            <button variant="text" type="button" className="btn-signe">*</button>
          </div>
          <div className="row-three">
            <button variant="text" type="button" className="btn1">4</button>
            <button variant="text" type="button" className="btn1">5</button>
            <button variant="text" type="button" className="btn1">6</button>
            <button variant="text" type="button" className="btn-signe">-</button>
          </div>
          <div className="row-four">
            <button variant="text" type="button" className="btn1">1</button>
            <button variant="text" type="button" className="btn1">2</button>
            <button variant="text" type="button" className="btn1">3</button>
            <button variant="text" type="button" className="btn-signe">+</button>
          </div>
          <div className="row-five">
            <button variant="text" type="button" className="btn0">0</button>
            <button variant="text" type="button" className="btn1">.</button>
            <button variant="text" type="button" className="btn-signe">=</button>
          </div>
        </div>
      </div>
    );
  }
}
