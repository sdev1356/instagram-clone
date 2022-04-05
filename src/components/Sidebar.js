import "../styles/Sidebar.scss"
import Sticky from "react-sticky-el"
import Profile from "./Profile"
import Suggestions from './Suggestions'
import Footer from './Footer';
import devInstagram from '../images/devInstagram.jpg'


function Sidebar(){
return (
    
    <Sticky topOffset={-80}>
    <div className="sidebar">
      <Profile
        username="sdev26"
        caption="Devashish Sharma"
        urlText="Switch"
        iconSize="big"
        image={devInstagram}
      />
      <Suggestions />
      <Footer />
    </div>
  </Sticky>
   
)
}
export default Sidebar;