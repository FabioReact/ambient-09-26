import { HeroCard, HeroCardSkeleton } from '@/components/HeroCard';
import { useState } from 'react';
import { generateAlphabet } from './utils';
import { Button } from '@/components/ui/button';
import { useGetHeroesByFirstLetterQuery } from '@/redux/features/apiSlice';

const alphabet = generateAlphabet();

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  const { data: heroes, isError, isLoading, isFetching, refetch } = useGetHeroesByFirstLetterQuery(selectedLetter)

  const onClickHandler = (letter: string) => {
    setSelectedLetter(letter);
    refetch();
  };

  return (
    <section className='space-y-8'>
      <div className='space-y-2 text-center'>
        <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>Directory</p>
        <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>Explore heroes</h1>
        <p className='text-muted-foreground'>Choose an initial to browse the roster.</p>
      </div>
      <ul className='flex justify-center gap-1.5 border rounded-xl shadow-sm'>
        {alphabet.map((letter) => (
          <li key={letter}>
            <Button
              variant={selectedLetter === letter ? 'default' : 'ghost'}
              onClick={() => onClickHandler(letter)}
            >
              {letter}
            </Button>
          </li>
        ))}
      </ul>
      {isError && <p className="text-red-500 text-sm">An error occured...</p>}
      {heroes?.length === 0 && !isLoading && !isError && 'No results'}
      <section className="flex justify-center">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5 ${isFetching ? 'opacity-50' : ''}`}>
          {(isLoading) && Array.from({ length: 4 }, (_, index) => <HeroCardSkeleton key={index} />)}
          {heroes?.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </section>
    </section>
  );
};

export { Heroes };
