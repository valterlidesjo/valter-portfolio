import ShowProject from '../components/ShowProject';
import sundMobile from "../assets/sundMobile.png";
import sundDesk from "../assets/sundDesktop.png";

const SundNergarden = () => {
  return (
    <>
    <ShowProject mobile={sundMobile} desktop={sundDesk} header='Sund Nergården' fontFamily='"Satisfy"' fontSize='2.5rem' website='sund nergården' url='https://demosundnergarden.netlify.app/'
    aboutText='
    -website for luxurios getaway hotel and restaurant sund nergården
    -frontend website with react and scss
    -food and drinks, rooms and glamping, contact, booking etc
    -booking component connected to third party system
    -spinning booking button
    -parallax picture
    -horizontal scrolls for mobile and grid hover systems for desktop' />
    </>
  )
}

export default SundNergarden