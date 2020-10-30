import React from 'react';
import PropTypes from 'prop-types';

const TotalBook = (props) => {
  const { total } = props;
  return (
    <div className='total_info'>
      <div className='total_book'>You have lent { total } books to friends</div>
      <div className='total_lent'>Lent to:</div>
    </div>
  );
};

export default TotalBook;
TotalBook.propTypes = {
  total: PropTypes.number,
};
