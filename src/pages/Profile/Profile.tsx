import { useSquadContext } from "@/context/squad-context";
import { useAppSelector } from "@/redux/hooks";

const Profile = () => {
    const { email, accessToken } = useAppSelector((state) => state.auth)
    const { squad, removeFromSquad } = useSquadContext();
    return (
    <section className='space-y-6'>
      <div className='gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>Profile</p>
          <h1 className='mt-2 text-3xl font-semibold tracking-tight'>Personnal info</h1>
          <p className='mt-2 text-sm text-muted-foreground'>Email: {email}</p>
          <p className='mt-2 text-sm text-muted-foreground'>Access Token: {accessToken}</p>
        </div>
        <div>
          <h1 className='mt-2 text-3xl font-semibold tracking-tight'>Squad info</h1>
          {squad.map((hero) => (
            <div key={hero.id}>
              <p>{hero.name}</p>
              <button onClick={() => removeFromSquad(hero.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}

export { Profile }