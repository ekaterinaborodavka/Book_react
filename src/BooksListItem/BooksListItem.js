import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as bookActions from '../Store/actions/bookActions';

import menu from '../img/menu.png'

export default function BooksListItem (props) {
    const { number, title, author, friend, until, id } = props.book
    const { showModal } = props
    const dispatch = useDispatch();
    
    const showChangeModal = useCallback(
        () => {
            showModal()
            dispatch(bookActions.changeEdit(true))
            dispatch(bookActions.changeElId(id))
        },[ showModal, dispatch, id ]
    )
    return (
        <li className='book_item' >
            <div className='number'>{ number }</div>
            <div className='book_title'>
                <div className='book_name'>{ title }</div>
                <div className='book_author'>{ author }</div>
            </div>
            <div className='book_info'>
                <div className='book_friend'>{ friend }</div>
                <div className='book_until'>{ until }</div>
            </div>
            <button className='book_button' 
                type='button'
                onClick= { showChangeModal }>
                <img src={ menu } className='button_img' alt='menu' />
            </button>
        </li>
      );
}