
import ShowProject from '../components/ShowProject'
import ttMobile from "../assets/ttMobile.png";
import ttDesk from "../assets/ttDesktop.png";

const TrankanTraining = () => {
  return (
    <>
    <ShowProject mobile={ttMobile} desktop={ttDesk} header='Trånkan Training' fontFamily='"Baskervville SC"' fontSize='2.5rem' 
    aboutText='
    -training website
    -fun project to teach myself php and mysql
    -my first project, learned a lot since then, but good for a first :)
    -homepage with animation, videos, text, and pictures for motivation
    -sign up and login for training costumers
    -db with phpmyadmin and mysql code
    -set profile picture, set current weight and height to track results
    -edit profile page
    -webshop with training items, shopping cart, contact etc
    -simulation for a purchase
    ' />
    </>
  )
}

export default TrankanTraining