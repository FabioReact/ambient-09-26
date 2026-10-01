import { increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  
  return (
    <>
      <h1>Home</h1>
      <p>Redux counter: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
};

export default Home;
