import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, className, onClick, ...props }) {
  const options = {
    className: `btn ${className}`,
    onClick,
  };
  return (
    <button {...options} {...props}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Button;
