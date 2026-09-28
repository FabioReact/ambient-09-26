const getHeroes = () => {
  return fetch('http://localhost:3001/heroes')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    });
};

const Heroes = () => {
//   const heroes = getHeroes();
  return (
    <>
      <h1>Heroes List</h1>
      <p>Une liste des super heroes</p>
      {/* {heroes.map(hero => <p>#{hero.id} - {hero.name}</p> )} */}
    </>
  );
};

export { Heroes };
