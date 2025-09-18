import vasterasDeskW from "../assets/export-vasteras-desk.webp";
import vasterasDesk from "../assets/export-vasteras-desk.png";
import "./styles/_customerCases.scss";

const CustomerCases = () => {
  return (
    <>
      <div className="customer-container">
        <p className="customer-header">Customer cases</p>
        <a className="vasteras-container" href="https://hotellvasteras.se">
          <div className="vasteras-text">
            <p className="vasteras-header">Hotell Västerås</p>
            <p className="vasteras-breadtext">
              Worked closely with Magdalena, the owner of the hotell for 6
              months. She had taken over the old website from the previous owner
              and needed an update. From personal needs, appealing design, good
              performance and focus converting bookings to the website from
              OTAs. A good and close collaborating generated this awesome
              website. Styled in Figma and developed with React, Typescript and
              SCSS. Third party booking system with Sirvoy.
            </p>
          </div>
          <div className="vasteras-image-super-container">
            <picture className="vasteras-image-container">
              <source srcSet={vasterasDeskW} type="image/webp" />
              <img
                src={vasterasDesk}
                alt="Hotell Västerås Desktop"
                loading="eager"
                decoding="async"
                fetchPriority="low"
                width={300}
                height={219}
                title="Picture of me"
              />
            </picture>
            <div className="final-product-container">
              <p className="final-product-text">
                Check out the final product here
              </p>
              <a
                href="https://hotellvasteras.se"
                className="final-product-button"
              >
                hotellvasteras.se
              </a>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default CustomerCases;
