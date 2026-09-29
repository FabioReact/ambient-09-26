// utiliser useCounter dans un composant
// Je dois pouvoir incrementer de 1
// Je dois pouvoir decrementer de 1
// Je dois pouvoir incrementer de n
// Je dois pouvoir reset le counter

import { useState } from 'react';

export const useCounter = (initialCount = 0) => {
  const [counter, setCounter] = useState(initialCount);

  const increment = () => {
    setCounter((c) => c + 1);
  };
  const decrement = () => {
    setCounter((c) => c - 1);
  };

  const incrementBy = (n: number) => {
    if (n > 0) {
      setCounter((c) => c + n);
    }
  };

  const reset = () => {
    setCounter(initialCount);
  };

  return {
    counter,
    increment,
    decrement,
    incrementBy,
    reset,
  };
};
