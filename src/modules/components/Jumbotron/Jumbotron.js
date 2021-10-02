import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from '../Button';

function Jumbotron({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  footerAction,
  ...props
}) {
  return (
    <div className={`jumbotron ${className}`} {...props}>
      <h1 className={`title ${titleClassName}`}>{title}</h1>
      {description && (
        <p className={`description ${descriptionClassName}`}>{description}</p>
      )}
      {footerAction && (
        <div className="mt-3">
          {footerAction.map((actionProps, idx) => (
            <Button key={idx} {...actionProps} />
          ))}
        </div>
      )}
    </div>
  );
}

Jumbotron.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  footerAction: PropTypes.arrayOf(PropTypes.object),
};

Jumbotron.defaultProps = {
  description: '',
  className: '',
  titleClassName: '',
  descriptionClassName: '',
  footerAction: null,
};

export default Jumbotron;
