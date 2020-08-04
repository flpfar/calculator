import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    let result;

    if (total) {
      if (next) {
        result = `${total}${operation}${next}`;
      } else {
        result = `${total}${operation}`;
      }
    } else {
      result = operation ? `${next}${operation}` : next;
    }

    return (
      <div className="calculator">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
