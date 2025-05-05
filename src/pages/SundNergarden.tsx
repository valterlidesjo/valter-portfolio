import ShowProject from "../components/ShowProject";
import sundMobile from "../assets/sundMobile.png";
import sundMobileW from "../assets/sundMobile.webp";
import sundDesk from "../assets/sundDesktop.png";
import sundDeskW from "../assets/sundDesktop.webp";

const SundNergarden = () => {
  return (
    <>
      <ShowProject
        mobile={sundMobile}
        mobileW={sundMobileW}
        desktop={sundDesk}
        desktopW={sundDeskW}
        header="Sund Nergården"
        fontFamily='"Satisfy"'
        fontSize="2.5rem"
        padding="0.3rem"
        website="sund nergården"
        url="https://demosundnergarden.netlify.app/"
        aboutText="
    -website for luxurious getaway hotel and restaurant sund nergården
    -frontend website with react and scss
    -food and drinks, rooms and glamping, contact, booking etc
    -booking component connected to third party system
    -spinning booking button
    -parallax picture
    -horizontal scrolls for mobile and grid hover systems for desktop"
      />
    </>
  );
};

export default SundNergarden;
