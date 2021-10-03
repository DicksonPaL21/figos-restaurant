import React from 'react';
import PropTypes from 'prop-types';

function Cards({ className, children, ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}

Cards.propTypes = {
  className: PropTypes.string,
};

Cards.defaultProps = {
  className: '',
};

export default Cards;
