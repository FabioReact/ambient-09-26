import { useEffect, useRef, useState } from "react"

const subscribeToChannel = (channelId: number) => console.log(`Soubscription au channel ${channelId}`)
const unsubscribeToChannel = (channelId: number) => console.log(`Désabonnement au channel ${channelId}`)
const log = () => {}

const LearningEffect = () => {
    const [counter, setCounter] = useState(0);
    const lastUpdatedRef = useRef('')
    const firstRenderRef = useRef(true)
    // let lastUpdated = ''

    // Uniquement lors de la mise à jour de counter
    // Appelé une fonction lorsque notre composant va etre détruit/démonté de l'UI
    // Construction Counter=0, incrmente -> Destruction du composant Counter=0, et construction du composant Counter=1

    useEffect(() => {
        // Lorsque le tableau de dépendances est vide, la fonction callback de cet useEffect n'est déclenchée qu'après le premier rendu du composant
        console.log('useEffect - 1er rendu du composant - []')
        console.log('red')

        // addEventListener('click', log)
        // const ac = new AbortController()
        // fetch('url', { signal: ac.signal })

        return () => {
            // removeEventListener('click', log)
            // ac.abort()
        }
    }, [])

    console.log('green')

    // addEventListener('click')

    useEffect(() => {
        // console.log('useEffect - 1er rendu de counter OU mise à jour de counter - [counter]', counter)
        subscribeToChannel(counter) // ici counter = channelId
        lastUpdatedRef.current = new Date().toISOString()
        if (firstRenderRef.current) {
            console.log('useEffect - 1er rendu de counter - [counter]', counter)
        } else {
            console.log('useEffect - mise à jour de counter - [counter]', counter)
        }
        firstRenderRef.current = false
        return () => {
            // clean up - nettoyer les abonnements - éviter les fuites mémoires
            unsubscribeToChannel(counter)
        }
    }, [counter])

    console.log(lastUpdatedRef.current)


    return (
        <section>
            <h1>Apprendre useEffect</h1>
            <p>useEffect sert à s'accrcoher au cycle de vie d'un composant</p>
            <button onClick={() => {setCounter(c => c + 1)}}>Increment {counter}</button>
        </section>
    )
}

export { LearningEffect }