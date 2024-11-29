import './profile.css'

const Profile = ({age,name,gmail,gender,image,education}) => {
    return(
        <div className='userprofile'>
            <div className='component'>
            <img src={image}/>
            <h1>Name:- {name}</h1>
            <h3>age:- {age}</h3>
            <p className='gmail'>Gmail:- {gmail}</p>
            <p className='gender'>Gender:- {gender}</p>
            <p className='edu'>Education:- {education}</p>
            </div>
        </div>
    )
}
export default Profile;