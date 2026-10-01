import { useReducer, useState } from 'react';

const initialState = 0;

enum ActionEnum {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
    INCREMENT_BY = 'incrementBy'
}

type ActionType =
  | {
      type: 'increment';
    }
  | { type: 'decrement' }
  | { type: 'incrementBy'; payload: number };

const reducer = (state: number, action: ActionType) => {
  switch (action.type) {
    case ActionEnum.INCREMENT:
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'incrementBy':
      return state + action.payload;
    default:
      throw new Error('Unsupported action type');
  }
};

const LearningReducer = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h1>Learning Reducer</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'incrementBy', payload: 5 })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: 'incrementBy', payload: 10 })}>
        Increment by 10
      </button>
    </section>
  );
};

export default LearningReducer;
