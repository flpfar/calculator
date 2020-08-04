import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;

  const isNumber = /^(\d)$/.test(buttonName);
  const isDot = buttonName === '.';
  const isOperator = ['x', '+', '-', '÷'].includes(buttonName);
  const isEqual = buttonName === '=';
  const isSign = buttonName === '+/-';
  const isClear = buttonName === 'AC';
  const isPercent = buttonName === '%';
  const hasDot = next && next.includes('.');

  if (isNumber || (isDot && !hasDot && next)) {
    next = next ? next + buttonName : buttonName;
  } else if (isClear) {
    total = null;
    next = null;
    operation = null;
  } else if (isSign && next) {
    next = (parseFloat(next) * (-1)).toString();
  } else if (isPercent && next) {
    next = (parseFloat(next) / 100).toString();
  } else if (isOperator) {
    if (next) {
      if (total) {
        const result = operate(total, next, operation);
        total = result && result.toString();
        next = null;
        operation = buttonName;
      } else {
        total = next;
        next = null;
        operation = buttonName;
      }
    } else if (total) {
      operation = buttonName;
    } else if (buttonName === '-') {
      next = buttonName;
    }
  } else if (isEqual) {
    if (total && next) {
      const result = operate(total, next, operation);
      total = null;
      next = result && result.toString();
      operation = null;
    }
  }

  return { total, next, operation };
};

export default calculate;
