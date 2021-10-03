import React from 'react';

// Components
import { Header } from '../../Header';
import { FeaturedHeader, FoodItems } from './components';

import featuredImage from '../../../assests/img/CarouselFood/MenuTop1.png';

function Home() {
  const featuredheaderProps = {
    title: (
      <>
        Order Tasty & Fresh Food <span className="text-red">anytime!</span>
      </>
    ),
    description:
      'Just confirm your order and enjoy our delicious fastest deliver.',
    footerAction: [
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
    ],
    className: 'py-5 px-1',
    featuredImage,
    featuredImageclassName: 'py-5 px-1 float-right',
  };

  return (
    <>
      <Header>
        <FeaturedHeader {...featuredheaderProps} />
      </Header>
      <FoodItems />
    </>
  );
}

export default Home;
