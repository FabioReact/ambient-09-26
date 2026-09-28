import UserCard from './UserCard'
import user from './user'
import users from './users'

console.log(user)

// <MonComposant prop1="valeur1" prop2="valeur2" />

const Exercice = () => {
  return (
    <>
      <h1>Exercices React</h1>
      <h2>Exercice 1: Passer des props à Usercard</h2>
      <UserCard />
      <h2>Exercice 2: Faite une boucle afin d'afficher une UseCard par utilisateur</h2>
    </>
  )
}

export default Exercice