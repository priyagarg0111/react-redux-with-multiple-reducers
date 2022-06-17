import React from 'react';
import { useDispatch } from 'react-redux';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const onRemoveBookHandler = () => {
    dispatch({ type: 'Remove_books', bookId: book.id });
  };

  return (
    <>
      <li onClick={onRemoveBookHandler}>{book.title}</li>
    </>
  );
};

export default BookItem;
