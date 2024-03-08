import Profile from "./components/Profile"
import MyForm from "./components/Form"
import myImage from "./components/img/JC-Profile-Photo-2.jpg"

const App = () => {
  return (
    <div>
      <Profile ProfilePic={myImage} ProfileIntro="I am a Front-End Developer with 15 years of experience working as a webmaster with my last employer.<br></br>My experience is developing user-friendly responsive websites using HTML, CSS, PHP and JavaScript. Creating mock-ups, layouts, graphics and banners, building a CMS database, using SEO optimization, Google Ads and Google Analytics."/>
      <MyForm/>
    </div>
  )
}

export default App