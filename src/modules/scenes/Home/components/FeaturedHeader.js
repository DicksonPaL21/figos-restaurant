import React from 'react';

// Components
import { Jumbotron, Image } from '../../../components';

function FeaturedHeader({
  title,
  description,
  footerAction,
  className,
  featuredImage,
  featuredImageclassName,
}) {
  const options = {
    title,
    description,
    footerAction,
    className,
  };
  return (
    <div className="mw-xxl" style={{ height: '100%' }}>
      <div className={featuredImageclassName}>
        <Image className="featured-menu" src={featuredImage} alt="" />
      </div>
      <Jumbotron {...options} />
    </div>
  );
}

export default FeaturedHeader;
