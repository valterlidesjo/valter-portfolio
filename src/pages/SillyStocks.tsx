import ShowProject from '../components/ShowProject'
import ssMobile from "../assets/Mobile.png";
import ssDesk from "../assets/Desk.png";


const SillyStocks = () => {
  return (
    <>
    <ShowProject mobile={ssMobile} desktop={ssDesk} header='SILLY STOCKS' fontFamily='"Poppins"' fontWeight='bold' fontSize='2.5rem' website='silly stocks' url='https://sillystocks.netlify.app/' 
    aboutText='
    -a stock app built with MERN stack
    -user can browse stocks, news, crypto, markets, catergories
    -sign up and sign in for users
    -search for stocks and get sugestions
    -user can save favorite stocks
    -if you check out the website only the frontend will work
    -poor student so can´t afford to host on a good server, works when the server is restarted
    -got scammed by the api provider so had to improvice with some numbers...
    ' />
    </>
  )
}

export default SillyStocks