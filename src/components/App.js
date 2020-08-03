import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="calculator">
      <Display result="" />
      <ButtonPanel />
    </div>
  );
}

export default App;