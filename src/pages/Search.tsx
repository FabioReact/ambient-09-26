import { HeroCard, HeroCardSkeleton } from '@/components/HeroCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLazyGetHeroesByCriteriaQuery } from '@/redux/features/apiSlice';
import { SearchIcon, SlidersHorizontal } from 'lucide-react';
import { useEffect, useRef, type SubmitEvent } from 'react';

const fieldClassName =
  'h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50';

const Search = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const alignmentRef = useRef<HTMLSelectElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    console.log('Nouveau render', Date.now());
  });

  const [search, { data: heroes, isLoading, isError }] = useLazyGetHeroesByCriteriaQuery()


  // Si enabled: false, alors on ne doit pas passer à queryKey les valeurs de nameRef, alignmentRef et genderRef dans le queryKey, car cela empeche de declencher le refetch() avec les nouvelles valeurs
  //  queryKey: ['heroes'],

  console.log(heroes, isLoading, isError);

  const onSubmitHandler = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    search({
      name: nameRef.current?.value || '',
      alignment: alignmentRef.current?.value || '',
      gender: genderRef.current?.value || '',
    });
  };

  return (
    <section className="space-y-8">
      <div className="space-y-2 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hero finder</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Find your hero</h1>
        <p className="text-muted-foreground">
          Search by name, or narrow the roster with a few filters.
        </p>
      </div>

      <Card className="mx-auto max-w-4xl shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SlidersHorizontal className="size-4" /> Search the roster
          </CardTitle>
          <CardDescription>
            Choose any combination of filters to discover matching characters.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmitHandler} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  ref={nameRef}
                  id="name"
                  type="search"
                  autoComplete="off"
                  placeholder="e.g. Spider-Man"
                  className={fieldClassName}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="alignment" className="text-sm font-medium">
                  Alignment
                </label>
                <select ref={alignmentRef} id="alignment" className={fieldClassName}>
                  <option value="">Any alignment</option>
                  <option value="good">Hero</option>
                  <option value="bad">Villain</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="gender" className="text-sm font-medium">
                  Gender
                </label>
                <select ref={genderRef} id="gender" className={fieldClassName}>
                  <option value="">Any gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 border-t pt-5">
              <Button type="submit" size="lg" disabled={false} className="min-w-32">
                <SearchIcon /> {isLoading ? 'Searching…' : 'Search heroes'}
              </Button>
                <Button type="reset" variant="ghost" size="lg" >Clear filters</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div aria-live="polite" className="space-y-5">
        {isLoading && (
          <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }, (_, index) => <HeroCardSkeleton key={index} />)}
          </div>
        )}
        {isError && (
          <p
            role="alert"
            className="rounded-xl border border-destructive/30 bg-destructive/10 p-5 text-center text-sm
         text-destructive"
          >
            Search failed. Please try again.
          </p>
        )}
        {heroes && !isLoading && (
          <>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Search results</h2>
              <p className="text-sm text-muted-foreground">
                {heroes.length} {heroes.length === 1 ? 'hero' : 'heroes'} found
              </p>
            </div>
            {heroes.length ? (
              <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {heroes.map((hero) => (
                  <HeroCard key={hero.id} hero={hero} />
                ))}
              </div>
            ) : (
              <Card className="py-10 text-center">
                <CardContent className="space-y-1">
                  <p className="font-medium">No heroes found</p>
                  <p className="text-sm text-muted-foreground">
                    Try a different name or fewer filters.
                  </p>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export { Search };
