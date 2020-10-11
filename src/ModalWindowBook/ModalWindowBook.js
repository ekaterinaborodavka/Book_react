import React, { useCallback } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import * as bookActions from '../Store/actions/bookActions';
import * as formActions from '../Store/actions/formAction';

const ModalWindowBook = (props) => {
    const { cancelModal } = props
    const books = useSelector((state) => state.book.books, shallowEqual);
    const modal = useSelector((state) => state.book.modal, shallowEqual);
    const edit = useSelector((state) => state.book.edit, shallowEqual);
    const changeElId = useSelector((state) => state.book.changeElId, shallowEqual);
    const changeEl = useSelector((state) => state.book.changeEl, shallowEqual);
    const form = useSelector((state) => state.form, shallowEqual);
    const checkbox = useSelector((state) => state.book.checkbox, shallowEqual);
    const dispatch = useDispatch();
    const { title, author, friend, until } = form
console.log(changeEl);
    const addBook = (e) => {
      e.preventDefault();
      if(!edit){
        dispatch(bookActions.addItem(form, books))
        dispatch(bookActions.showModalFilter('modal', 'filter'))
      }else if(checkbox){
        dispatch(bookActions.deleteItem(changeElId))
        dispatch(bookActions.showModalFilter('modal', 'filter'))
      }else{
        dispatch(bookActions.changeItem(form, changeElId))
        dispatch(bookActions.showModalFilter('modal', 'filter'))
      }
    }

    const onInputChange = useCallback(
      ({ target }) => {
          dispatch(formActions.updateForm({
            [target.name]: target.value,
          })); 
      }, [dispatch],
    );

    const onCheckbox = useCallback(
      () => {
        dispatch(bookActions.changeCheckbox())
      }, [dispatch],
  );

  return (
    <div className= { modal }>
    <form className='modal-content'
        onSubmit = { addBook }>
        <div className='wrapper_title'>
            <h3 className='modal-title'>Lending a book away</h3>
        </div>
        <div className='book'>
        <input id='title_book'
            name='title'
            defaultValue={ changeEl.length === 0 ? title : 
            changeEl[0].title }
            placeholder='Title of the book:' 
            type='text'
            onChange={ onInputChange } />
        </div>
        <div className='friend'>
        <input id='title_friend' 
            name='friend'
            defaultValue={ changeEl.length === 0 ? friend : 
            changeEl[0].friend }
            placeholder='Lent to friend:' 
            type='text'
            onChange={ onInputChange } />
        </div>
        <div className='author'>
        <input id='title_author' 
            name='author'
            defaultValue={ changeEl.length === 0 ? author : 
            changeEl[0].author }
            placeholder='Author' 
            type='text'
            onChange={ onInputChange } />
        </div>
        <div className='until'>
        <input id='title_until' 
            name='until'
            defaultValue={ changeEl.length === 0 ? until : 
            changeEl[0].until }
            placeholder='Until:' 
            type='date'
            onChange={ onInputChange } />
        </div>
        { edit ? <div className='checkbox'>
            <input id='title_checkbox' 
            type='checkbox'
            value={ checkbox }
            onClick={ onCheckbox } />
            <label htmlFor='title_checkbox'>Book has been returned back</label>
                  </div> : null}
         <div className='buttons'>
             <button type='button' 
                className='cancel'
                onClick= { cancelModal }>Cancel</button>
             <button className='save' >Save</button>
         </div> 
     </form>
    </div>
  );
};

export default ModalWindowBook;