import "./styles/_projects.scss";
import ssBild from "../assets/svartssbild.png";
import sundBild from "../assets/sundbild.jpeg";
import trainingBild from "../assets/trainingbild.jpg";
import terniBild from "../assets/terni-screen.png";
import { Link } from "react-router";

const Projects = () => {
    
  return (
    <>
    <div className="projects-container">
        <Link to={"/projects/sillystocks"} className="ss-container">
            <div className="ss-top-text ss">SILLY</div>
            <img src={ssBild} alt="Silly Stocks" />
            <div className="ss-bottom-text ss">STOCKS</div>
        </Link>
        <div className="white-box-container">
            <div className="white-box"></div>
        </div>
        <Link to={"/projects/sundnergarden"} className="sund-container">
        <div className="sund-top-text sund">Sund</div>
            <img src={sundBild} alt="Sund Nergården" />
            <div className="sund-bottom-text sund">Nergården</div>
        </Link>
        <div className="white-box-2-container">
            <div className="white-box-2"></div>
        </div>
        <Link to={"/projects/trankantraining"} className="training-container">
        <div className="training-top-text training">Trånkan</div>
            <img src={trainingBild} alt="Trånkan Training" />
            <div className="training-bottom-text training">Training</div>
        </Link>
        <div className="white-box-3-container">
            <div className="white-box-3"></div>
        </div>
        <Link to={"/projects/terni"} className="terni-container">
        <div className="terni-top-text terni">Terni</div>
            <img src={terniBild} alt="Terni" />
            <div className="terni-bottom-text terni"></div>
        </Link>
    </div>
    </>
  )
}

export default Projects