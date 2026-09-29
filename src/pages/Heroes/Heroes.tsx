import HeroCard from '@/components/HeroCard';
import { useGetHeroes } from '@/hooks/useGetHeroes';
import { useState } from 'react';
import { generateAlphabet } from './utils';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { getHeroesByFirstLetter } from '@/api/heroes';

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

const alphabet = generateAlphabet();

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  // const { heroes, isLoading, isError, error, refetch } = useGetHeroes();
  const { data: heroes, isError, isLoading, error, refetch } = useQuery({
    queryKey: ['heroes', selectedLetter], // heroes/A, heroes/B
    queryFn: () => getHeroesByFirstLetter(selectedLetter)
  })

  const onClickHandler = (letter: string) => {
    setSelectedLetter(letter); // state update
    refetch();
  };

  return (
    <section>
      <ul className="flex justify-center gap-4 my-4">
        {alphabet.map((l) => (
          <li key={l}>
            <Button
              variant={selectedLetter === l ? 'default' : 'ghost'}
              onClick={() => {
                onClickHandler(l);
              }}
            >
              {l}
            </Button>
          </li>
        ))}
      </ul>
      {isLoading && <Skeleton />}
      {isError && <p className="text-red-500 text-sm">An error occured... Reason: {error.message}</p>}
      {heroes?.length === 0 && !isLoading && !isError && 'No results'}
      <section className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5">
          {heroes?.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </section>
    </section>
  );
};

export { Heroes };
