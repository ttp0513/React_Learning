export const ProfileCard = ({username, bio, img}) => {
    return (
        <div className="profile-card">
            <img src={img} alt={username} />
            <h2>{username}</h2>
            <p>{bio}</p>
        </div>
    );
}