import React from 'react';
import PropTypes from 'prop-types';
import plus from '../img/plus.png';

const ButtonBook = (props) => {
  const { showModal } = props;
  return (
    <div className='wrapper_footer'>
      <footer className='footer'>
        <button type='button'
          className='add_book'
          onClick= { showModal }>
          <img src={ plus } alt='plus' className='icon_footer' />
                Lend a new book away
        </button>
      </footer>
    </div>
  );
};

export default ButtonBook;
ButtonBook.propTypes = {
  showModal: PropTypes.func,
};
