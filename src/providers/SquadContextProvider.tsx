import SquadContext from '@/context/squad-context';
import type { Hero } from '@/types/hero';
import { useState, type PropsWithChildren } from 'react';

const SquadContextProvider = ({ children }: PropsWithChildren) => {
  const [squad, setSquad] = useState<Hero[]>([]);

  const addToSquad = (hero: Hero) => {
    if (squad.length === 3) return;
    if (squad.includes(hero)) return;

    setSquad(s => [...s, hero]);
  };

  const removeFromSquad = (id: number) => {
    setSquad(s => s.filter(hero => hero.id !== id));
  };

  return (
    <SquadContext.Provider value={{
        squad,
        addToSquad,
        removeFromSquad,
     }}>
        {children}
     </SquadContext.Provider>
  )
};

export { SquadContextProvider };
