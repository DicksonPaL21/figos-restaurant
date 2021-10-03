import React from 'react';
import PropTypes from 'prop-types';

function CardItems({ src, alt, className, ...props }) {
  const options = {
    src,
    className: `image ${className}`,
  };
  return <img alt={alt} {...options} {...props} />;
}

CardItems.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

CardItems.defaultProps = {
  src: '',
  alt: '',
  className: '',
};

export default CardItems;
