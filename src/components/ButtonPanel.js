import React from 'react';
import Button from './Button';

function ButtonPanel() {
  const row1 = ['AC', '+/-', '%', '÷'];
  const row2 = ['7', '8', '9', 'X'];
  const row3 = ['4', '5', '6', '-'];
  const row4 = ['1', '2', '3', '+'];
  const row5 = ['0', '.', '='];

  return (
    <div className="button-panel">
      <div className="row1">
        { row1.map(btn => <Button key={btn} name={btn} />) }
      </div>
      <div className="row2">
        { row2.map(btn => <Button key={btn} name={btn} />) }
      </div>
      <div className="row3">
        { row3.map(btn => <Button key={btn} name={btn} />) }
      </div>
      <div className="row4">
        { row4.map(btn => <Button key={btn} name={btn} />) }
      </div>
      <div className="row5">
        { row5.map(btn => <Button key={btn} name={btn} />) }
      </div>
    </div>
  );
}

export default ButtonPanel;
