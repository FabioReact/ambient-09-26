import type { Hero } from "../types/hero";

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