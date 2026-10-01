import { useAuthContext } from "@/context/auth-context"
import { useSquadContext } from "@/context/squad-context";

const Profile = () => {
    const authContext = useAuthContext()
    const { squad, removeFromSquad } = useSquadContext();
    // accessToken 
    return (
    <section className='space-y-6'>
      <div className='gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-sm font-semibold tracking-[0.2em] text-primary uppercase'>Profile</p>
          <h1 className='mt-2 text-3xl font-semibold tracking-tight'>Personnal info</h1>
          {/* <p className='mt-2 text-muted-foreground break-all'>
            {accessToken} - {email} - {id}
          </p> */}
          <pre>{JSON.stringify(authContext, null, 2)}</pre>
          {/* <AuthContext.Consumer>
            {(authContext) => {
                return <pre>{JSON.stringify(authContext, null, 2)}</pre>
            }}
          </AuthContext.Consumer> */}
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