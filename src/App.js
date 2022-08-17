import React from 'react';
import Calculator from './components/Calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <p> let do some math</p>
        <div>
          <Calculator />
        </div>
      </div>
    );
  }
}
