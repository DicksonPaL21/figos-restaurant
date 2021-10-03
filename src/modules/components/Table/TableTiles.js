import React from 'react';
// import PropTypes from 'prop-types';

// Components
import { Cards, Button } from '../';

// Styles
import './TableTiles.scss';

function TableItemsCard({ item }) {
  return (
    <Cards>
      <div className="card-product-image"></div>
      <div className="card-product-info">
        <p className="product-name">{item.name}</p>
        <span className="product-type">{item.type}</span>
      </div>
      <div className="card-product-action">
        <Button label="Buy Now" className="btn-red" />
        <Button label="Add to Card" className="btn-green" />
      </div>
    </Cards>
  );
}

function TableTiles({ data, ...props }) {
  return (
    <div className="tiles">
      {data.map((item, idx) => (
        <TableItemsCard key={idx} item={item} />
      ))}
    </div>
  );
}

// TableTiles.propTypes = {
//   type: PropTypes.oneOf(['tiles', 'details']),
// };

// TableTiles.defaultProps = {
//   type: 'details',
// };

export default TableTiles;

// [
//   {
//     "Name": "Apple",
//     "Type": "fruit",
//     "Price": 100
//   },
//   {
//     "Name": "pizza",
//     "Type": "italian",
//     "Price": 370
//   },
//   {
//     "Name": "Burger",
//     "Type": "Mac&Cheese",
//     "Price": 310
//   },
//   {
//     "Name": "salad",
//     "Type": "Veg",
//     "Price": 50
//   }
// ]
