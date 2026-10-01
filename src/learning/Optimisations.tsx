import React, {
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react';

// React.memo permet de mémoiser un composant, il se fera un re-render que si ses props changent
// useCallback permet de mémoiser l'adresse d'une fonction
// useMemo

const expensiveFunction = (number: number) => {
  let str = '';
  for (let i = 0; i < 30000000; i++) {
    str += 'a';
  }
  return str.length + number;
};

const Title = React.memo(({ children }: { children: React.ReactNode }) => {
  console.log('Render Title');
  return <h1 className="text-3xl font-bold underline">{children}</h1>;
});

const Button = React.memo(({ onClick, children }: PropsWithChildren<{ onClick: () => void }>) => {
  console.log('Render de Button', children);
  const rendersRef = useRef(1);
  useEffect(() => {
    rendersRef.current = rendersRef.current + 1;
  });
  return <button onClick={onClick}>{children}</button>;
});

const Optimisations = () => {
  const [incrementBy, setIncrementBy] = useState(1);
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  const onIncrementBy = useCallback(() => {
    setCounter((prev) => prev + incrementBy); // incrementBy = 1
  }, [incrementBy]);

  const result = useMemo(() => expensiveFunction(incrementBy), [incrementBy]);

  return (
    <section>
      <Title>Optimisations</Title>
      <p>Counter: {counter}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={onIncrementBy}>Increment by X</Button>
      <div className="bg-amber-300">
        <label htmlFor="incrementBy">Increment By</label>
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(parseInt(e.target.value))}
        />
      </div>
      <div className="bg-green-500">
        <p>Result of compute expensive function: {result}</p>
      </div>
    </section>
  );
};

export default Optimisations;
