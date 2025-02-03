import { useEffect } from "react";
import "./styles/_homepage.scss";
import valterImage from "../assets/image-valter.jpg";
import Projects from "../components/Projects";
import { FaReact, FaHtml5, FaSass, FaNode, FaPhp } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript, SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import { Link } from "react-router";

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
          <p>Valter Lidesjö</p>
        </div>
        <div className="homepage-header">
          <div className="top-text-container">
          <p>Fullstack</p>
          <p>Developer.</p>
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

      
      <Link to={"/about-me"} className="me-info-container">
        <p>
          I'm a swedish fullstack developer living in Stockholm. I enjoy
          challenges, evolvement and finding new solutions. <br />
          I'm currently studying E-commerce WebDev while working on several
          projects on the side.
          <br />
          I'm an ambitious, whole hearted, hard working person whether it comes
          to development, training or my friends and family. Check out my projects below or click here to learn more about me.
        </p>
      </Link>
      <div className="languages-box">
        <div className="row-1">
            <div className="icon-box">

        <FaReact className="icon"/>
        <div className="react-tooltip">React</div>
            </div>
            <div className="icon-box">

        <SiTypescript className="icon"/>
        <div className="ts-tooltip">Typescript</div>
            </div>
            <div className="icon-box">

        <FaHtml5 className="icon"/>
        <div className="html-tooltip">HTML</div>
            </div>
            <div className="icon-box">

        <IoLogoCss3 className="icon"/>
        <div className="css-tooltip">CSS</div>
            </div>
            <div className="icon-box">

        <FaSass className="icon"/>
        <div className="sass-tooltip">Sass</div>
            </div>
        </div>
        <div className="row-2">

        <div className="icon-box">
        <FaNode className="icon"/>
        <div className="node-tooltip">Node</div>
        </div>
        
        <div className="icon-box">

        <SiMongodb className="icon"/>
        <div className="mongo-tooltip">MongoDB</div>
        </div>
        <div className="icon-box">

        <SiExpress className="icon"/>
        <div className="express-tooltip">Express</div>
        </div>
        <div className="icon-box">

        <FaPhp className="icon"/>
        <div className="php-tooltip">PHP</div>
        </div>
        <div className="icon-box">
            
        <SiMysql className="icon"/>
        <div className="sql-tooltip">MySQL</div>
        </div>
        </div>
      </div>
      <Link to={"/projects"} className="projects-button">
        <button >My Projects</button>
      </Link>
      </div>
      <Projects />
    </>
  );
};

export default Homepage;
