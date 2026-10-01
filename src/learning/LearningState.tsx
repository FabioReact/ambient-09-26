import { useState } from 'react';

const LearningState = () => {
  const [counter, setCounter] = useState(11);

  return (
    <section>
      <h1>Comprendre useState</h1>
      <p>Valeur de mon état: {counter}</p>
      <button
        onClick={() => {
          setCounter(prevCounter => prevCounter + 1); // 11 + 1 -> 12
          // Si l'etat futur dépend de l'état actuel, on doit utiliser une fonction callback pour mettre à jour l'état. Cela permet d'éviter des bugs liés à la mise à jour asynchrone de l'état.
          setCounter(c => c + 1); // 12 + 1 -> 13
        }}
      >
        Incrémenter
      </button>
      <p>
        React va mettre à jour l'état du composant dans le VirtualDOM. Ensuite il compare le
        VirtualDOM et le DOM. Si ils sont différents, il va mettre à jour le DOM.
      </p>
    </section>
  );
};

export default LearningState;
