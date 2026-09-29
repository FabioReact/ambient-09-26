import { useCounter } from '../hooks/useCounter';

const Counter = () => {
  const { counter, increment, decrement, incrementBy, reset } = useCounter(5);

  return (
    <section>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
      <button onClick={() => incrementBy(5)}>Increment by 5</button>
      <button onClick={() => incrementBy(6)}>Increment by 6</button>
      <button onClick={reset}>Reset Counter</button>
    </section>
  );
};

export default Counter;
