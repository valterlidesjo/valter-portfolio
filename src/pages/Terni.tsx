import ShowProject from "../components/ShowProject"
import terniDesk from "../assets/TerniDesk.png";
import terniDeskW from "../assets/TerniDesk.webp";
import terniMobile from "../assets/TerniMobile.png";
import terniMobileW from "../assets/TerniMobile.webp";



const Terni = () => {
  return (
    <>
    <ShowProject header="Terni" mobile={terniMobile} mobileW={terniMobileW} desktop={terniDesk} desktopW={terniDeskW} fontFamily='"Caveat"' website="terni" url="https://terni.netlify.app/" fontSize="3rem" 
    aboutText="
    -frontend restaurant website in react with tailwind
    -booking component made with an third party api
    -search for a table and get time and day for three days forward
    -used reducer and context to minimize props and make the states global
    -contact page with google maps
    -admin to handle bookings with crud operations
    "/>
    </>
  )
}

export default Terni