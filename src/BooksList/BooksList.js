import React from 'react';
import PropTypes from 'prop-types';

import BooksListItem from '../BooksListItem/BooksListItem';

export default function BookList(props) {
  const { books, showModal } = props;

  return (
    <ul className='book_list'>
      {Array.isArray(books) && books.map( (book) => {
        return (
          <BooksListItem
            showModal={ showModal }
            book={ book }
            key={ book.id }
          />
        );
      })}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.array,
  showModal: PropTypes.func,
};
