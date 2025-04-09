import { useEffect } from "react";
import "./styles/_homepage.scss";
import valterImage from "../assets/image-valter.jpg";
import Projects from "../components/Projects";
import { Link } from "react-router";
import LanguageBox from "../components/LanguageBox";

const Homepage = () => {

    useEffect(() => {
        const image = document.querySelector(".homepage-image-container");

        if (!image) return;
    
        const handleMouseOver = () => {

            if (!image.classList.contains("animate")) {
                image.classList.add("animate");
                image.addEventListener(
                    "animationend",
                    () => {
                        image.classList.remove("animate");
                    },
                    { once: true }
                );
            }
        };
        
        image.addEventListener("mouseover", handleMouseOver);
        
        return () => {
            image.removeEventListener("mouseover", handleMouseOver);
        };
      }, []);

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
        <div className="homepage-yellow"></div>
        <div className="homepage-image-container">
          <img src={valterImage} alt="Picture of me" />
        </div>
        <div className="homepage-white-box"></div>
      </div>
      <div className="homepage-container">
        <LanguageBox />

      
      <Link to={"/about-me"} className="me-info-container">
        <p>
          I'm a swedish fullstack developer living in Stockholm. I enjoy
          challenges, learning new tech, evolvement and finding new solutions. <br />
          I'm currently studying E-commerce WebDev while working on several
          projects on the side.
          <br />
          I'm an ambitious, whole hearted, hard working person whether it comes
          to development, training or my friends and family. Check out my projects below or click here to learn more about me.
        </p>
      </Link>
      
      <Link to={"/projects"} className="projects-button">
        <button >My Projects</button>
      </Link>
      </div>
      <Projects />
    </>
  );
};

export default Homepage;
