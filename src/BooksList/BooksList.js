import React from 'react';
import BooksListItem from '../BooksListItem/BooksListItem'

export default function GoodsList(props) {
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