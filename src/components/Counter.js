import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';

const Counter = () => {

  const [increaser, setIncreaser] = useState(null);
  const counterRef = useRef()
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  function IncrementHandler() {
    dispatch({ type: 'increment' })
  }

  function DecrementHandler() {
    dispatch({ type: 'decrement' })

  }
  function IncreaseByHandler() {
    dispatch({ type: 'increase', value: Number(increaser) })
  }

  function InputHandler() {
    setIncreaser(counterRef.current.value)
    counterRef.current.value = null;
  }

  function ResetCounterHandler() {
    dispatch({ type: 'reset' })
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&
        <div>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={IncrementHandler}>Increment</button>
            <button onClick={DecrementHandler}>Decrement</button>
            <button onClick={IncreaseByHandler}>IncreaseBy {increaser ? increaser : ''}</button>
            <button onClick={ResetCounterHandler}>Reset Counter</button>
          </div>
          <div>
            <input type='text' ref={counterRef} placeholder='Enter value to increase' />
            <button onClick={InputHandler}>Set Increase</button>
          </div>
        </div>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
