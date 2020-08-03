import React from 'react';
import Button from './Button';

function ButtonPanel() {
  const row1 = ['AC', '+/-', '%', '÷'];
  const row2 = ['7', '8', '9', 'x'];
  const row3 = ['4', '5', '6', '-'];
  const row4 = ['1', '2', '3', '+'];
  const row5 = ['0', '.', '='];

  return (
    <div className="button-panel">
      <div className="row row1">
        { row1.map((btn, index) => <Button key={btn} name={btn} color={index !== 3 ? '#ddd' : null} />) }
      </div>
      <div className="row row2">
        { row2.map((btn, index) => <Button key={btn} name={btn} color={index !== 3 ? '#ddd' : null} />) }
      </div>
      <div className="row row3">
        { row3.map((btn, index) => <Button key={btn} name={btn} color={index !== 3 ? '#ddd' : null} />) }
      </div>
      <div className="row row4">
        { row4.map((btn, index) => <Button key={btn} name={btn} color={index !== 3 ? '#ddd' : null} />) }
      </div>
      <div className="row row5">
        { row5.map((btn, index) => <Button key={btn} wide={btn === '0'} name={btn} color={index !== 2 ? '#ddd' : null} />) }
      </div>
    </div>
  );
}

export default ButtonPanel;
