import './Profile.css';

interface ProfileProps {
  ProfilePic: string;
  ProfileIntro: string;
}

const Profile = ({ProfilePic, ProfileIntro}: ProfileProps) => {
  return (
    <div>
      <img src={ProfilePic} className='ProfilePic' alt='' />
      <div className='ProfileIntro'>{ProfileIntro}</div>
        {/* <imageUrl />
        <bio /> */}
    </div>
  )
}

export default Profile