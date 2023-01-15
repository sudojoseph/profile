import './AboutContainer.css';
import profileImg from '../../img/profilePic.jpg';


const AboutContainer = () => {
  return (
    <div className='split-content-container about-container'>
      <div>
        <p>"Programming is not just a job. It's a pation!"</p>
      </div>
      <img src={profileImg} alt="profile-image" className='profile-img'/>
    </div>
  )
}

export default AboutContainer