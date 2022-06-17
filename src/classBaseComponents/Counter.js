import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {
    this.props.toggle();
  };

  increaseHandler = () => {
    this.props.increase();
  };

  decreaseHandler = () => {
    this.props.decrease();
  };

  render() {
    return (
      <div className="counter">
        <h1>Redux Counter</h1>
        {this.props.isShow && <h2>Counter value - {this.props.counter}</h2>}
        <button onClick={this.incrementHandler}>+</button>
        <button onClick={this.decrementHandler}>-</button>
        <button onClick={this.increaseHandler}>+ by 5</button>
        <button onClick={this.decreaseHandler}>- by 10</button>
        <button onClick={this.toggleCounterHandler}>Toggle</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    isShow: state.isShowCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
    increase: () => dispatch({ type: 'increase', amount: 5 }),
    decrease: () => dispatch({ type: 'decrease', amount: 10 }),
    toggle: () => dispatch({ type: 'toggle' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
