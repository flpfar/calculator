import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide }) {
  const width = wide ? '50%' : '25%';
  return (
    <button type="button" className="btn" style={{ ...color ? { backgroundColor: color } : null, width }}>
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
