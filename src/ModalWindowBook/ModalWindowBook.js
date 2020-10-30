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
            value={  title }
            placeholder={ changeEl[0].title === '' ? 
            'Title of the book:' : changeEl[0].title }
            type='text'
            onChange={ onInputChange } />
        </div>
        <div className='friend'>
        <input id='title_friend' 
            name='friend'
            value={ friend }
            placeholder={ changeEl[0].title === '' ? 
            'Lent to friend:' : changeEl[0].friend }
            type='text'
            onChange={ onInputChange } />
        </div>
        <div className='author'>
        <input id='title_author' 
            name='author'
            value={ author }
            placeholder={ changeEl[0].title === '' ? 
            'Author' : changeEl[0].author }
            type='text'
            onChange={ onInputChange } />
        </div>
        <div className='until'>
        <input id='title_until' 
            name='until'
            value={ until }
            placeholder={ changeEl[0].title === '' ? 
            'Until' : changeEl[0].until }
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