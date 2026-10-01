import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Hero } from '@/types/hero';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSquadContext } from '@/context/squad-context';

type HeroCardProps = {
  hero: Hero;
};

// Je dois ajouter un hero à la squad
// Une squad doit avoir 3 héros maximum, au dela, il m'est impossible d'en ajouter plus
// Si un héro est déjà ajouter, je ne peux pas l'ajouter une deuxieme fois, en rechanche, je dois pouvoir le retirer
// La squad doit etre visible dans la page profil

const HeroCard = ({ hero }: HeroCardProps) => {
  const { squad, addToSquad, removeFromSquad } = useSquadContext();
  const isInSquad = squad.some((squadHero) => squadHero.id === hero.id);
  const isFull = squad.length === 3;

  const stats = [
    {
      label: 'INT',
      value: hero.powerstats.intelligence,
      className:
        'border-sky-200 bg-sky-100 text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300',
    },
    {
      label: 'COM',
      value: hero.powerstats.combat,
      className:
        'border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300',
    },
    {
      label: 'DUR',
      value: hero.powerstats.durability,
      className:
        'border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300',
    },
    {
      label: 'POW',
      value: hero.powerstats.power,
      className:
        'border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300',
    },
    {
      label: 'SPD',
      value: hero.powerstats.speed,
      className:
        'border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300',
    },
    {
      label: 'STR',
      value: hero.powerstats.strength,
      className:
        'border-orange-200 bg-orange-100 text-orange-700 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-300',
    },
  ];

  return (
    <Card className="w-full max-w-xs gap-0 overflow-hidden py-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-80 overflow-hidden bg-muted">
        <img
          className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-500 group-hover/card:scale-105"
          src={hero.image.url}
          alt={`Illustration of ${hero.biography['full-name'] || hero.name}`}
        />
      </div>
      <CardHeader className="pt-4">
        <CardTitle className="text-lg">
          <Link to={String(hero.id)} className="transition-colors hover:text-primary">
            {hero.name}
          </Link>
          <span className="ml-1.5 text-sm font-normal text-muted-foreground">#{hero.id}</span>
        </CardTitle>
        <CardDescription>{hero.biography['full-name'] || 'Unknown identity'}</CardDescription>
        <CardAction>None</CardAction>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5 border-t mt-3 py-3">
        {stats.map(({ label, value, className }) => (
          <Badge key={label} variant="outline" className={className}>
            {label} {value}
          </Badge>
        ))}
      </CardContent>
      <CardContent className="border-t py-3">
        {isInSquad ? (
          <Button className="w-full cursor-pointer" variant="secondary" onClick={() => removeFromSquad(hero.id)}>
            Remove from Squad
          </Button>
        ) : (
          <Button className="w-full cursor-pointer" onClick={() => addToSquad(hero)} disabled={isFull}>
            Add to Squad
          </Button>
        )}
      </CardContent>
    </Card>
  );
};



export default HeroCard;
