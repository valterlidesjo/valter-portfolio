import "./styles/_projects.scss";
import ssBild from "../assets/svartssbild.png";
import sundBild from "../assets/sundbild.jpeg";
import trainingBild from "../assets/trainingbild.jpg";
import { useNavigate } from "react-router";

const Projects = () => {
    const navigate = useNavigate();
    
  return (
    <>
    <div className="projects-container">
        <div className="ss-container" onClick={() => navigate("/projects/sillystocks")}>
            <div className="ss-top-text ss">SILLY</div>
            <img src={ssBild} alt="Silly Stocks" />
            <div className="ss-bottom-text ss">STOCKS</div>
        </div>
        <div className="white-box-container">
            <div className="white-box"></div>
        </div>
        <div className="sund-container" onClick={() => navigate("/projects/sundnergarden")}>
        <div className="sund-top-text sund">Sund</div>
            <img src={sundBild} alt="Sund Nergården" />
            <div className="sund-bottom-text sund">Nergården</div>
        </div>
        <div className="white-box-2-container">
            <div className="white-box-2"></div>
        </div>
        <div className="training-container" onClick={() => navigate("/projects/trankantraining")}>
        <div className="training-top-text training">Trånkan</div>
            <img src={trainingBild} alt="Trånkan Training" />
            <div className="training-bottom-text training">Training</div>
        </div>
    </div>
    </>
  )
}

export default Projects