// On va créer notre propre custom hook
// Va nous servir à centraliser la logique (d'un appel, d'un traitement...) de plusieurs hook react

import { useEffect, useState } from "react";
import type { Hero } from "../types/hero";
import { getHeroes } from "../api/heroes";

export const useGetHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getHeroes()
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

    return {
        heroes,
        isLoading,
        isError,
        error,
    }
};
