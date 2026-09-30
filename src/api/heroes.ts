import type { HeroFormData } from '@/pages/AddHero/schema';
import type { Hero } from '../types/hero';
import { formDataToHeroMapper } from './utils';

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

export const getHeroesByCriteria = async ({ name, alignment, gender }: { name: string, alignment: string, gender: string }): Promise<Hero[]> => {
  if (!name && !alignment && !gender) return [];
  const params = new URLSearchParams();
  if (name) params.set('name_like', name);
  if (alignment) params.set('biography.alignment_like', alignment);
  if (gender) params.set('appearance.gender_like', gender);
  const queryString = params.toString();
  const response = await fetch(`http://localhost:3001/heroes?${queryString}`);
  if (!response.ok) throw new Error('Failed to search heroes');
  return response.json();
};


export const createHero = async (data: HeroFormData): Promise<Hero> => {
  // transform the form data into a hero
  const hero = formDataToHeroMapper(data)
  const response = await fetch('http://localhost:3001/heroes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hero),
  });
  if (!response.ok) throw new Error('Failed to create hero');
  return response.json();
};