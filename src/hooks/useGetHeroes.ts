// On va créer notre propre custom hook
// Va nous servir à centraliser la logique (d'un appel, d'un traitement...) de plusieurs hook react

import { useEffect, useState } from 'react';
import type { Hero } from '../types/hero';
import { getHeroesByFirstLetter } from '../api/heroes';

export const useGetHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getHeroesByFirstLetter('A')
      .then((data) => {
        setHeroes(data);
      })
      .catch((err) => {
        setIsError(true);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const refetch = async (letter: string) => {
    setIsError(false); // state update
    setIsLoading(true);
    setError('');
    setHeroes([]);

    try {
      const data = await getHeroesByFirstLetter(letter);
      if (data) setHeroes(data);
    } catch (error) {
      setIsError(true);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    heroes,
    isLoading,
    isError,
    error,
    refetch,
  };
};
