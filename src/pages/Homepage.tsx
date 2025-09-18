import "./styles/_homepage.scss";
import valterImage2 from "../assets/bildvarberg.jpg";
import valterImage2W from "../assets/bildvarberg.webp";
import Projects from "../components/Projects";
import { Link } from "react-router";
import LanguageBox from "../components/LanguageBox";
import CustomerCases from "../components/CustomerCases";

const Homepage = () => {
  return (
    <>
      <div className="homepage-start-top-container">
        <div className="name-top">
          <h1>Valter Lidesjö</h1>
        </div>
        <div className="homepage-header">
          <div className="top-text-container">
            <h2>Fullstack</h2>
            <h2>Developer.</h2>
          </div>
          <div className="g-text-container">
            <p className="g-text">
              Student and freelancer that loves to help companies with technical
              solutions.
            </p>
          </div>
        </div>
        <div className="space-container">.</div>
        <div className="homepage-start-yellow"></div>
      </div>
      <div className="boxes-container">
        <picture className="homepage-image-container">
          <source srcSet={valterImage2W} type="image/webp" />
          <img
            src={valterImage2}
            alt="Picture of me"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={220}
            height={290}
            title="Picture of me"
          />
        </picture>
        <div className="homepage-yellow"></div>
      </div>
      <div className="homepage-container">
        <CustomerCases />
        <LanguageBox />

        <Link to={"/about-me"} className="me-info-container">
          <p>
            I'm a swedish fullstack developer living in Stockholm. I enjoy
            challenges, learning new tech, evolvement and finding new solutions.{" "}
            <br />
            I'm currently studying E-commerce WebDev while working on several
            projects on the side.
            <br />
            I'm an ambitious, wholehearted, hard working person whether it comes
            to development, training or my friends and family. Check out my
            projects below or click here to learn more about me.
          </p>
        </Link>

        <Link to={"/projects"} className="projects-button">
          <button>My Projects</button>
        </Link>
      </div>
      <Projects />
    </>
  );
};

export default Homepage;
