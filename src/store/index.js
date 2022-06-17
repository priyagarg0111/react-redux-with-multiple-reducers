import { createStore, combineReducers } from 'redux';

const initialCounterState = { counter: 0, isShowCounter: true };

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        isShowCounter: state.isShowCounter,
      };

    case 'increase':
      return {
        counter: state.counter + action.amount,
        isShowCounter: state.isShowCounter,
      };

    case 'decrement':
      return {
        counter: state.counter - 1,
        isShowCounter: state.isShowCounter,
      };

    case 'decrease':
      return {
        counter: state.counter - action.amount,
        isShowCounter: state.isShowCounter,
      };

    case 'toggle':
      return {
        counter: state.counter,
        isShowCounter: !state.isShowCounter,
      };

    default:
      return state;
  }
};

const initialBookState = {
  books: [],
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case 'Add_books':
      return {
        books: [...state.books, action.newBook],
      };

    case 'Remove_books':
      const filteredBooks = state.books.filter(
        (book) => book.id !== action.bookId
      );
      return {
        books: filteredBooks,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  book: bookReducer,
});

const store = createStore(rootReducer);

export default store;
