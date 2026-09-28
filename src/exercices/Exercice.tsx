import UserCard from './UserCard'
import user from './user'
import users from './users'

const Exercice = () => {
  return (
    <>
      <h1>Exercices React</h1>
      <h2>Exercice 1: Passer des props à Usercard</h2>
      <UserCard name={user.name} house={user.house} image={user.img} />
      <h2>Exercice 2: Faite une boucle afin d'afficher une UseCard par utilisateur</h2>
      {users.map(user => <UserCard key={user.id} house={user.house} name={user.name} image={user.img} />)}
    </>
  )
}

export default Exercice