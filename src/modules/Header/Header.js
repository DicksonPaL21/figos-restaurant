import React from 'react';

// Components
import { Jumbotron, Image } from '../components';

import featuredMenu from '../../assests/img/CarouselFood/MenuTop1.png';

function Header({ title, description, ...props }) {
  return (
    <div className="header">
      <div className="mw-xl" style={{ height: '100%' }}>
        <div className="py-5 px-1 float-right">
          <Image className="featured-menu" src={featuredMenu} alt="" />
        </div>
        <Jumbotron
          title={
            <>
              Order Tasty & Fresh Food{' '}
              <span className="text-red">anytime!</span>
            </>
          }
          description="Just confirm your order and enjoy our delicious fastest deliver."
          footerAction={[
            {
              label: 'order now',
              className: 'btn-round text-capitalize',
              onClick: () => {
                console.log('order now');
              },
            },
            {
              label: 'see menu',
              className: 'btn-see-more text-uppercase',
              onClick: () => {
                console.log('see menu');
              },
            },
          ]}
          className="py-5 px-1"
        />
      </div>
    </div>
  );
}

export default Header;
