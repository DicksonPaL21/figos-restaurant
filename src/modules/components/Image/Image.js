import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt, className, ...props }) {
  const options = {
    src,
    className: `image ${className}`,
  };
  return <img alt={alt} {...options} {...props} />;
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  alt: '',
  className: '',
};

export default Image;
