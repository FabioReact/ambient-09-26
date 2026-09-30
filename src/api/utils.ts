import type { HeroFormData } from "@/pages/AddHero/schema";
import type { Hero } from "@/types/hero";

export const formDataToHeroMapper = (data: HeroFormData): Omit<Hero, 'id'> => {
  return ({
  name: data.name,
  powerstats: {
    intelligence: data.intelligence,
    strength: data.strength,
    speed: data.speed,
    durability: data.durability,
    power: data.power,
    combat: data.combat,
  },
  biography: {
    'full-name': '',
    'alter-egos': '',
    aliases: data.aliases || [],
    'place-of-birth': '',
    'first-appearance': '',
    publisher: '',
    alignment: data.alignment as any,
  },
  appearance: {
    gender: data.gender,
    race: '',
    height: [],
    weight: [],
    'eye-color': '',
    'hair-color': '',
  },
  work: {
    occupation: '',
    base: '',
  },
  connections: {
    'group-affiliation': '',
    relatives: '',
  },
  image: {
    url: '',
  },
  })
};