import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const subscribeToChannel = (channelId: number) =>
  console.log(`Soubscription au channel ${channelId}`);
const unsubscribeToChannel = (channelId: number) =>
  console.log(`Désabonnement au channel ${channelId}`);


// Les hooks commencent par use...
// useEffect() -> Si on souhaite s'accrocher au cycle de vie d'un composant (la premiere fois qu'il est rendu dans l'UI (tableau de dépendance vide), lors de ces mises à jour (si on écoute le changement d'une variable dans le tableau de dépendances), et la destruction du composant (dans le cleanup - aka return du useEffect))
// useRef() -> React conserve une reference stable vers une variable. Si la valeur change, il n'y pas de re-render du composant
// useState() -> React va observer la variable, si celle-ci change, on fait un re-render du composant

const LearningEffect = () => {
  const [counter, setCounter] = useState(0);
  const lastUpdatedRef = useRef('');
  const firstRenderRef = useRef(true);
  // let lastUpdated = ''

  // Uniquement lors de la mise à jour de counter
  // Appelé une fonction lorsque notre composant va etre détruit/démonté de l'UI
  // Construction Counter=0, incrmente -> Destruction du composant Counter=0, et construction du composant Counter=1

  useEffect(() => {
    // Lorsque le tableau de dépendances est vide, la fonction callback de cet useEffect n'est déclenchée qu'après le premier rendu du composant
    console.log('useEffect - 1er rendu du composant - []');
    console.log('red');

    return () => {};
  }, []);

  console.log('green');

  useEffect(() => {
    subscribeToChannel(counter); // ici counter = channelId
    lastUpdatedRef.current = new Date().toISOString();
    if (firstRenderRef.current) {
      console.log('useEffect - 1er rendu de counter - [counter]', counter);
    } else {
      console.log('useEffect - mise à jour de counter - [counter]', counter);
    }
    firstRenderRef.current = false;
    return () => {
      // clean up - nettoyer les abonnements - éviter les fuites mémoires
      unsubscribeToChannel(counter);
    };
  }, [counter]);

  useLayoutEffect(() => {
    console.log('yellow');
    return () => {}
  }, []);

  console.log(lastUpdatedRef.current);

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <button
        onClick={() => {
          setCounter((c) => c + 1);
        }}
      >
        Increment {counter}
      </button>
      <header className="space-y-3 border-b border-border pb-6">
        <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground">
          React Hook
        </span>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">useEffect</h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Exécuter et nettoyer une synchronisation avec le monde extérieur à React.
          </p>
        </div>
      </header>

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-4">
          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_4px] shadow-emerald-500/15" />
          <div className="space-y-2">
            <p className="font-semibold text-card-foreground">Un effet après le rendu</p>
            <p className="leading-7 text-muted-foreground">
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useEffect</code>{' '}
              s’exécute après l’affichage du composant. Dans cet exemple, il enregistre un écouteur
              de clic sur le document. Le tableau de dépendances vide indique que cette
              synchronisation est créée au montage du composant uniquement.
            </p>
            <p className="leading-7 text-muted-foreground">
              Si une valeur est ajoutée au tableau, par exemple{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">[searchTerm]</code>
              , l’effet s’exécute une première fois après le montage, puis à chaque changement de{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">searchTerm</code>.
              React compare les dépendances entre deux rendus et ne relance l’effet que si au moins
              l’une d’elles a changé.
            </p>
            <p className="leading-7 text-muted-foreground">
              La fonction retournée par l’effet est appelée lors du démontage : elle supprime
              l’écouteur pour éviter de conserver un comportement devenu inutile. Quand une
              dépendance change, ce nettoyage est aussi exécuté avant que le nouvel effet ne soit
              lancé.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-semibold tracking-tight">useEffect ou useLayoutEffect ?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-muted/60 p-4">
            <code className="font-mono text-sm font-semibold">useEffect</code>
            <p className="mt-2 leading-7 text-muted-foreground">
              S’exécute après que le navigateur a affiché les changements. C’est le choix par défaut
              pour les requêtes, abonnements, écouteurs ou synchronisations qui n’ont pas besoin de
              bloquer l’affichage.
            </p>
          </div>
          <div className="rounded-xl bg-muted/60 p-4">
            <code className="font-mono text-sm font-semibold">useLayoutEffect</code>
            <p className="mt-2 leading-7 text-muted-foreground">
              S’exécute de façon synchrone après la mise à jour du DOM, mais avant son affichage. Il
              sert à mesurer ou modifier la mise en page sans effet visuel intermédiaire, mais peut
              retarder le rendu.
            </p>
          </div>
        </div>
        <p className="mt-4 border-l-2 border-primary pl-4 leading-7 text-muted-foreground">
          Utilisez{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useEffect</code> dans
          la majorité des cas. Réservez{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">useLayoutEffect</code>{' '}
          aux besoins lorsque vous souhaitez executer une tâche avant le rendu.
        </p>
      </div>
    </section>
  );
};

export { LearningEffect };
