import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = new Big(numberOne);
  const n2 = new Big(numberTwo);

  switch (operation) {
    case '+':
      return n1.plus(n2);
    case '-':
      return n1.minus(n2);
    case 'x':
      return n1.times(n2).toString();
    case '÷':
      if (numberTwo === '0') {
        return null;
      }
      return n1.div(n2);
    default:
      return null;
  }
};

export default operate;
