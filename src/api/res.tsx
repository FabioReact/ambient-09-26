import { getHeroesByCriteria } from '@/api/heroes';
import { useState } from 'react';

type GenderOptions = 'male' | 'female' | '';

const Search = () => {
  // Faire une recherche par nom, par alignment et/ou par genre
  // avec tanstack query
  const [alignment, setAlignment] = useState<string>('');
  const [gender, setGender] = useState<GenderOptions>('');
  const [name, setName] = useState('');
  getHeroesByCriteria({ name, alignment: 'good', gender: 'female' });

  return (
    <section>
      <h1>Search</h1>
      <div>
        <fieldset>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter name..." onChange={(event) => {
            setName(event.target.value)
          }} value={name} />
        </fieldset>
        <fieldset>
          <label htmlFor="alignment">Alignment:</label>
          <select
            id="alignment"
            onChange={(event) => {
              setAlignment(event.target.value);
            }}
          >
            <option value="">Select an alignment</option>
            <option value="hero">Hero</option>
            <option value="villain">Villain</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            onChange={(event) => {
              setGender(event.target.value as GenderOptions);
            }}
          >
            <option value="">Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </fieldset>
        <button>Search</button>
      </div>
      <p>
        Vous avez cherché: {name} - {alignment} - {gender}
      </p>
    </section>
  );
};

export { Search };
