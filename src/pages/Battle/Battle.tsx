import { Button } from '@/components/ui/button';
import type { Hero } from '@/types/hero';
import { useState } from 'react';
import { SelectHero } from './SelectHero';
import { HeroCard } from '@/components/HeroCard';
import { fight } from './utils';

// Sauvegarder dans redux le hero et l'opponent, et le winner, et la date du combat, pour pouvoir les afficher dans l'historique des combats à afficher sur le profil de l'utilisateur.
// Ne sauvegarder que si l'utilisateur est connecté, sinon ne rien faire.

const Battle = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [opponent, setOpponent] = useState<Hero | null>(null);
  const [winner, setWinner] = useState<Hero | null>(null);

  const onSelectHero = (selectedHero: Hero) => {
    setHero(selectedHero);
  };

  const onSelectOpponent = (selectedHero: Hero) => {
    setOpponent(selectedHero);
  };

  const onFight = () => {
    if (hero && opponent) {
      const result = fight(hero, opponent);
      setWinner(result);
    }
  };

  const onReset = () => {
    setHero(null);
    setOpponent(null);
    setWinner(null);
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
        {!hero && <SelectHero label="Hero" onSelect={onSelectHero} />}
        {hero && <HeroCard hero={hero} />}
        {hero && opponent && <Button onClick={onFight}>Battle</Button>}
        {!opponent && <SelectHero label="Opponent" onSelect={onSelectOpponent} />}
        {opponent && <HeroCard hero={opponent} />}
      </div>
      {winner && (
        <div className="text-center">
          <p className="text-lg font-semibold">The winner is {winner.name}!</p>
          <Button onClick={onReset}>Play again</Button>
        </div>
      )}
    </section>
  );
};

export default Battle;
