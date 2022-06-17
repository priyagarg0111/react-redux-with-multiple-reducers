import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShowCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  const decreaseHandler = () => {
    dispatch({ type: 'decrease', amount: 10 });
  };

  return (
    <div className={classes.counter}>
      <h1 className={classes.mainHeading}>Redux Counter</h1>
      {isShow && <h2 className={classes.subHeading}>{counter}</h2>}
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={increaseHandler}>+ by 5</button>
      <button onClick={decreaseHandler}>- by 10</button>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </div>
  );
};

export default Counter;
