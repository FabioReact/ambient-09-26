import { useGetHeroes } from "../hooks/useGetHeroes";

const Skeleton = () => {
  return (
    <div className="max-w-full animate-pulse">
      <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
        &nbsp;
      </div>
      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
        &nbsp;
      </div>
      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
        &nbsp;
      </div>
    </div>
  );
};

const Heroes = () => {
  const { heroes, isLoading, isError, error } = useGetHeroes();

  return (
    <>
      <h1>Heroes List</h1>
      <p>Une liste des super heroes</p>
      {isLoading && <Skeleton />}
      {isError && <p className='text-red-500 text-sm'>An error occured... Reason: {error}</p> }
      {heroes.length === 0 && !isLoading && !isError && 'No results'}
      {heroes.map((hero) => (
        <p key={hero.id}>
          #{hero.id} - {hero.name}
        </p>
      ))}
    </>
  );
};

export { Heroes };
