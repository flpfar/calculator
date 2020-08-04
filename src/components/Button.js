import React from 'react';
import PropTypes from 'prop-types';

function Button({
  name, color, wide, clickHandler,
}) {
  const width = wide ? '50%' : '25%';

  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <button type="button" className="btn" onClick={() => handleClick(name)} style={{ ...color ? { backgroundColor: color } : null, width }}>
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
  clickHandler: null,
};

export default Button;
