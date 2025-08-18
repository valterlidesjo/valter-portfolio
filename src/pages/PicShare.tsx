import ShowProject from "../components/ShowProject";
import picMobile from "../assets/picshare-mobile.png";
import picMobileW from "../assets/picshare-mobile.webp";
import picDesk from "../assets/picshare-desk.png";
import picDeskW from "../assets/picshare-desk.webp";

const PicShare = () => {
  return (
    <>
      <ShowProject
        mobile={picMobile}
        mobileW={picMobileW}
        desktop={picDesk}
        desktopW={picDeskW}
        header="Pic Share"
        fontFamily='"Arial"'
        fontWeight="bold"
        fontSize="2.5rem"
        website="pic share"
        url="https://pic-share--pic-share-be97b.europe-west4.hosted.app/"
        aboutText="
    -a social media app built with next and firebase
    -user can upload images, browse gallery, check personal feed, follow user, comment etc
    -sign up and sign in for users with firebase authentication
    -next app router
    -firestore database for storing info
    -firebase storage for storing images
    -algolia as search engine and indexing user info from firestore
    -hosted with firebase app hosting
    -different firestore triggered cloud functions
    -big love for firebase after this project
    "
      />
    </>
  );
};

export default PicShare;
