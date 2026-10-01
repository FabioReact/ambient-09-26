import { Button } from '@/components/ui/button';
import type { Hero } from '@/types/hero';
import { useState } from 'react';
import { SelectHero } from './SelectHero';
import HeroCard from '@/components/HeroCard';

const Battle = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [opponent, setOpponent] = useState<Hero | null>(null);
  //   const winner = fight(hero, opponent);
  // Si un hero est selectionné, ne plus afficher le formulaire
  // Apres avoir obtenu le resultat du combat, afficher le gagnant et un bouton pour recommencer un nouveau duel

  const onSelectHero = (selectedHero: Hero) => {
    setHero(selectedHero);
  };

  const onSelectOpponent = (selectedHero: Hero) => {
    setOpponent(selectedHero);
  };

  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Simulator</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Hero battle</h1>
        <p className="mt-2 text-muted-foreground">
          Pick two contenders and let their power stats decide.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start">
        <SelectHero label="Hero" onSelect={onSelectHero} />
        {hero && <HeroCard hero={hero} />}
        <SelectHero label="Opponent" onSelect={onSelectOpponent} />
        {hero && opponent && <Button>Battle</Button>}
      </div>
    </section>
  );
};

export default Battle;
