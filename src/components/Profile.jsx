const Profile = (props) =>{
    return (
       <div id="profile">
  <h1 id="name">{props.firstName}</h1>

  <p id="job">{props.job}</p>
  <p id="birthdate">{props.birthdate}</p>
</div>
 
    )
}

export default Profile;