type AvatarProps = {

}

const Avatar = (props: AvatarProps) => {
	return (
		<img src="" alt="Profil of" />
	)
}

type UserCardProps = {
    prop1: string,
    prop2: number,
    prop3: boolean,
    optionalprop?: string[],
}

const UserCard = (props: UserCardProps) => {
	return (
		<div className="card">
			<Avatar />
			<div>
				<p>Prénom: </p>
				<p>House: </p>
			</div>
		</div>
	)
}

export default UserCard