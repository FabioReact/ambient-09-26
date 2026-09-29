import type { Hero } from '../types/hero';

export const getHeroes = (): Promise<Hero[]> => {
  return fetch('http://localhost:3001/heroes')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    });
};

export const getHeroesByFirstLetter = async (letter: string): Promise<Hero[]> => {
  if (!letter) return [];
  return fetch(`http://localhost:3001/heroes?name_like=^${letter}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    });
};
