import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import classes from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const bookInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredInput = bookInputRef.current.value;
    if (enteredInput === '') {
      return;
    }

    const newBook = {
      id: new Date().toISOString(),
      title: bookInputRef.current.value,
    };

    dispatch({ type: 'Add_books', newBook });
    bookInputRef.current.value = '';
  };

  return (
    <div>
      <h1>Redux - Add/Remove Book</h1>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <input
          type="text"
          placeholder="Enter book title..."
          ref={bookInputRef}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
