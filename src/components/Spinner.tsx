import classes from './spinner.module.css';

const Spinner = () => {
  return <div role='status' aria-busy className={classes.loader}></div>;
};

export { Spinner };
