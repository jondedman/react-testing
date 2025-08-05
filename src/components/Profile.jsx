const Profile = (props) => {
return (
   <div>
    <h3>{props.name}</h3>
    <p>{props.job}</p>
    <p>{props.birthdate}</p>
   </div>
)
}

export default Profile;