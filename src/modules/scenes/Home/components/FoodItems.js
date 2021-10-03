import React from 'react';
// import PropTypes from 'prop-types';

// Components
import { Table } from '../../../components';

// JSON DATA
import foods from './Foods.json';

function FoodItems({ ...props }) {
  return (
    <div className="py-3 mw-xxl">
      <Table type="tiles" data={foods} />
    </div>
  );
}

// FoodItems.propTypes = {
//   src: PropTypes.string,
//   alt: PropTypes.string,
//   className: PropTypes.string,
// };

// FoodItems.defaultProps = {
//   src: '',
//   alt: '',
//   className: '',
// };

export default FoodItems;
