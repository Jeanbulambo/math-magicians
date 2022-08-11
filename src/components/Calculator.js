import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../Style.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState((prevState) => ({
      ...prevState,
      ...calculate(prevState, event.target.textContent),
    }));
  };

  return (
    <div className="main-container">
      <div className="result-container">
        <span className="cal-display">{state.next || state.total || 0}</span>
      </div>
      <div className="buttons-wrapper">
        <div className="row-one">
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            AC
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            +/-
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            %
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn-signe"
          >
            *
          </button>
        </div>
        <div className="row-two">
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            7
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            8
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            9
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn-signe"
          >
            *
          </button>
        </div>
        <div className="row-three">
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            4
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            5
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            6
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn-signe"
          >
            -
          </button>
        </div>
        <div className="row-four">
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            1
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            2
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            3
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn-signe"
          >
            +
          </button>
        </div>
        <div className="row-five">
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn0"
          >
            0
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn1"
          >
            .
          </button>
          <button
            variant="text"
            type="button"
            onClick={handleClick}
            className="btn-signe"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
