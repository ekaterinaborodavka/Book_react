import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import ButtonBook from '../ButtonBook/ButtonBook';
import HeaderBook from '../HeaderBook/HeaderBook'
import ModalWindowBook from '../ModalWindowBook/ModalWindowBook';
import TotalBook from '../TotalBook/TotalBook';
import BooksList from '../BooksList/BooksList'
import { getTotal } from '../utils/booksUtils'
import * as bookActions from '../Store/actions/bookActions';

import './App.css';

export default function App() {
  const books = useSelector((state) => state.book.books, shallowEqual);
  const filter = useSelector((state) => state.book.filter, shallowEqual);
  const dispatch = useDispatch();

  const total = getTotal(books)

const showModal = useCallback(
    () => {
      dispatch(bookActions.showModalFilter('active', 'active_filter'))
    },[dispatch],
)

const cancelModal = useCallback(
  () => {
    dispatch(bookActions.showModalFilter('modal', 'filter'))
    dispatch(bookActions.changeEdit(false))
  },[dispatch],
)

  return (
    <React.Fragment>
      <HeaderBook />
      <TotalBook total={ total } />
      <div className='wrapper_main'>
        <main className='main'>
           <div className={ filter }></div>
           <ModalWindowBook 
            cancelModal={ cancelModal } />
            <BooksList
              showModal={ showModal }
              books={ books } />
        </main>
      </div>
      <ButtonBook showModal= { showModal } />
    </React.Fragment>
  );
}
