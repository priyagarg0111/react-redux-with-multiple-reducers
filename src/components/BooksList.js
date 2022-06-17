import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BooksList = () => {
  const booksList = useSelector((state) => state.book.books);

  return (
    <>
      {(booksList === undefined || booksList.length === 0) && (
        <p>No books are available!</p>
      )}
      <ul>
        {booksList &&
          booksList.map((book) => <BookItem key={book.id} book={book} />)}
      </ul>
    </>
  );
};

export default BooksList;
