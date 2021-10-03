import React from 'react';
import PropTypes from 'prop-types';

// Components
import TableTiles from './TableTiles';
import TableDetails from './TableDetails';

function Table({ type, data, ...props }) {
  switch (type) {
    case 'tiles':
      return <TableTiles data={data} />;
    case 'details':
    default:
      return <TableDetails data={data} />;
  }
}

Table.propTypes = {
  type: PropTypes.oneOf(['tiles', 'details']),
};

Table.defaultProps = {
  type: 'details',
};

export default Table;
