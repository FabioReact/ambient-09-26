import { getHeroesByName } from '@/api/heroes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import type { Hero } from '@/types/hero';
import { Input } from '@base-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useRef, type SubmitEvent } from 'react';

type SelectHeroProps = {
  label: string;
  onSelect: (hero: Hero) => void;
};

const SelectHero = ({ label, onSelect }: SelectHeroProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    data: heroes,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['heroes', inputRef.current?.value || label],
    queryFn: () => getHeroesByName(inputRef.current?.value || ''),
    enabled: Boolean(inputRef.current?.value || ''),
  });

  const onSubmitHandler = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <Card className="w-full max-w-sm shadow-sm">
      <CardHeader>
        <CardTitle className="capitalize">Choose Hero</CardTitle>
        <CardDescription>Search the hero directory by name.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmitHandler}>
          <fieldset className="mb-4 space-y-2">
            <Label htmlFor={label}>{label}</Label>
            <Input id={label} placeholder="Enter hero name" ref={inputRef} />
          </fieldset>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </form>
      </CardContent>
      {isError && (
        <>
          <p className="mt-4 text-sm text-red-500">An error occurred while searching for heroes.</p>
          <Button className="w-full mt-2" onClick={() => refetch()}>
            Retry
          </Button>
        </>
      )}
      {heroes && heroes.length > 0 && (
        <ul className="mt-5 space-y-1 border-t pt-4">
          {heroes.map((hero) => (
            <li
              className="cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
              key={hero.id}
            >
              <button onClick={() => onSelect(hero)}>
                <span>#{hero.id}</span> - {hero.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export { SelectHero };