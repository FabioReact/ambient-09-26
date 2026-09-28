type AvatarProps = {
    source: string
    alternative?: string
}

const Avatar = ({ alternative, source }: AvatarProps) => {
	return (
		<img src={source} alt={`Profil of ${alternative}`} />
	)
}

type UserCardProps = {
    name: string
    house: string
    image: string
}

const UserCard = ({ name, house, image }: UserCardProps) => {
	return (
		<div className="card">
			<Avatar source={image} alternative={name} />
			<div>
				<p>Prénom: {name}</p>
				<p>House: {house}</p>
			</div>
		</div>
	)
}

export default UserCard