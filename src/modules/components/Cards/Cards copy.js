import React from 'react';
import PropTypes from 'prop-types';

import CardItems from './CardItems';

function Cards({ type, className, children, ...props }) {
  const DefaultCards = ({ className, children, ...props }) => {
    return (
      <div className={`card ${className}`} {...props}>
        {children}
      </div>
    );
  };

  const cardProps = {
    className,
    children,
    ...props,
  };

  switch (type) {
    case 'item':
      return <CardItems {...cardProps} />;
    default:
      return <DefaultCards {...cardProps} />;
  }
}

Cards.propTypes = {
  type: PropTypes.string,
};

Cards.defaultProps = {
  type: '',
};

export default Cards;
