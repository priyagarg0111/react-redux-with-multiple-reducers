import React from 'react';
import Counter from './components/Counter';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import classes from './components/Books.module.css';
// import Counter from './classBaseComponents/Counter';
import './style.css';

export default function App() {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center' }}>Combine Reducers</h1>
      <Counter />
      <div className={classes.books}>
        <AddBook />
        <BooksList />
      </div>
    </React.Fragment>
  );
}
