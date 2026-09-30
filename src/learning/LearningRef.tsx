import { useRef, useState } from 'react'

const LearningRef = () => {
  const [counter, setCounter] = useState(0)
  const rendersRef = useRef(0)
  const boxRef = useRef(null)

  const onClickHandler = () => {
    setCounter((prevCount) => prevCount + 1)
    rendersRef.current++
    console.log(rendersRef.current)
  }

  return (
    <section className='mx-auto max-w-3xl space-y-6'>
      <header className='space-y-3 border-b border-border pb-6'>
        <span className='inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground'>
          React Hook
        </span>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>useRef</h1>
          <p className='max-w-2xl text-base leading-7 text-muted-foreground'>
            Conserver une valeur ou cibler un élément du DOM sans déclencher de nouveau rendu.
          </p>
        </div>
      </header>

      <div className='rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6'>
        <p className='leading-7 text-card-foreground'>
          <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>useRef</code> retourne
          un objet stable dont la valeur se trouve dans <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>current</code>.
          Cette valeur est conservée entre les rendus, mais sa modification ne déclenche pas de
          nouveau rendu de l’interface.
        </p>
      </div>

      <div className='space-y-5 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6'>
        <div className='flex items-center justify-between gap-4'>
          <p className='text-sm font-medium text-muted-foreground'>Élément référencé</p>
          <span className='rounded-full bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground'>
            boxRef
          </span>
        </div>
        <div
          className='flex min-h-28 items-center justify-center rounded-xl border border-dashed border-primary/40 bg-primary/5 font-semibold text-primary'
          id='box'
          ref={boxRef}
          >
          Box
        </div>
        <p className='leading-7 text-muted-foreground'>
          Dans cet exemple, <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>boxRef</code>{' '}
          référence la boîte du DOM, tandis que <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>rendersRef</code>{' '}
          mémorise un compteur interne. Ce dernier peut évoluer sans être affiché ni provoquer de
          rendu supplémentaire.
        </p>
        <div className='flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-sm text-muted-foreground'>Compteur : <span className='font-semibold text-foreground'>{counter}</span></p>
          <button
            className='inline-flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'
            onClick={onClickHandler}
          >
            Incrémenter
          </button>
        </div>
      </div>
    </section>
  )
}

export { LearningRef }
