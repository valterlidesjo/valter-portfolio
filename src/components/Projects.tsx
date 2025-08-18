import "./styles/_projects.scss";
import ssBild from "../assets/svartssbild.png";
import ssBildW from "../assets/svartssbild.webp";
import sundBild from "../assets/sundbild.jpeg";
import sundBildW from "../assets/sundbild.webp";
import trainingBild from "../assets/trainingbild.jpg";
import trainingBildW from "../assets/trainingbild.webp";
import terniBild from "../assets/terni-screen.png";
import terniBildW from "../assets/terni-screen.webp";
import picBlueBild from "../assets/picshareblue.png";
import picBlueBildW from "../assets/picshareblue.webp";

import { Link } from "react-router";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <Link to={"/projects/sundnergarden"} className="sund-container">
          <div className="sund-top-text sund">Sund</div>
          <picture>
            <source srcSet={sundBildW} type="image/webp" />
            <img
              src={sundBild}
              alt="Picture of Sund Nergården"
              width={160}
              height={160}
              loading="lazy"
              title="Picture of Sund Nergården"
            />
          </picture>
          <div className="sund-bottom-text sund">Nergården</div>
        </Link>
        <div className="white-box-container">
          <div className="white-box"></div>
        </div>
        <Link to={"/projects/picshare"} className="picshare-container">
          <div className="v-top-text picshare">Pic</div>
          <picture>
            <source srcSet={picBlueBildW} type="image/webp" />
            <img
              src={picBlueBild}
              alt="Picture of PicShare"
              width={160}
              height={160}
              loading="lazy"
              title="Picture of PicShare"
            />
          </picture>
          <div className="picshare-bottom-text picshare">Share</div>
        </Link>
        <div className="white-box-2-container">
          <div className="white-box-2"></div>
        </div>
        <Link to={"/projects/trankantraining"} className="training-container">
          <div className="training-top-text training">Trånkan</div>
          <picture>
            <source srcSet={trainingBildW} type="image/webp" />
            <img
              src={trainingBild}
              alt="Picture of Trånkan Training"
              title="Picture of Trånkan Training"
              width={160}
              height={160}
              loading="lazy"
            />
          </picture>
          <div className="training-bottom-text training">Training</div>
        </Link>
        <div className="white-box-3-container">
          <div className="white-box-3"></div>
        </div>
        <Link to={"/projects/terni"} className="terni-container">
          <div className="terni-top-text terni">Terni</div>
          <picture>
            <source srcSet={terniBildW} type="image/webp" />
            <img
              src={terniBild}
              alt="Picture of Terni"
              title="Picture of Terni"
              width={160}
              height={160}
              loading="lazy"
            />
          </picture>
          <div className="terni-bottom-text terni"></div>
        </Link>
        <div className="white-box-4-container">
          <div className="white-box-4"></div>
        </div>
        <Link to={"/projects/sillystocks"} className="ss-container">
          <div className="ss-top-text ss">SILLY</div>
          <picture>
            <source srcSet={ssBildW} type="image/webp" />
            <img
              src={ssBild}
              alt="Picture of Silly stocks"
              width={160}
              height={160}
              loading="lazy"
              title="Picture of Silly stocks"
            />
          </picture>
          <div className="ss-bottom-text ss">STOCKS</div>
        </Link>
      </div>
    </>
  );
};

export default Projects;
