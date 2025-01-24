import "./styles/_projectsPage.scss";
import { useNavigate } from "react-router";
import ssBild from "../assets/svartssbild.png";
import sundBild from "../assets/sundbild.jpeg";
import trainingBild from "../assets/trainingbild.jpg";


const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="projects-page-container">
        <div className="projects-page-header">
          <p>my projects</p>
        </div>
        <div className="projects-info-container">
          <p>
            been working on projects since may 2024 so i'm a pretty fresh face
            in webdev but been grinding hard since then. always been drawn
            towards coding and tought the idea of turning vision into a real
            working website was fascinating. <br /> <br />
            started learning html, css and js with online code camps and
            youtube. first small project was a restaurant site, then css
            paintings, movie app with api etc. <br /> <br />
            started an education in webdev and got a better computer. learned
            php, mysql and db and made my first "bigger" project{" "}
            <span
              className="blue-p"
              onClick={() => navigate("/projects/trankantraining")}
            >
              trånkan training
            </span>{" "}
            <br /> <br />
            learned typescript, scss, node, mongodb and express with smaller
            projects. cms with localstorage, weather app with mongo, express and
            node. felt comfortable with that so started learning react to
            complete the full mern stack and fell in love <br /> <br />
            instantly started a bigger project with three classmates.{" "}
            <span
              className="blue-p"
              onClick={() => navigate("/projects/sillystocks")}
            >
              silly stocks
            </span>{" "}
            a stock browsing website. made all the backend with node, mongo and
            express but also the frontend to complete my mern stack. <br />{" "}
            <br />
            found a family friends website for their luxurios getaway that
            needed some love. made a new website for{" "}
            <span
              className="blue-p"
              onClick={() => navigate("/projects/sundnergarden")}
            >
              sund nergården
            </span>{" "}
            in react and scss. started by teaching myself figma and made a skiss
            and then turned it into a website. only frontend project so focused
            on good reusable and scalable code with nice structure. <br />{" "}
            <br />
            check out my projects down below, <br />
            love valter
          </p>
        </div>
        <div className="projects">
          <div className="projects-tt" onClick={() => navigate("/projects/trankantraining")}>
            <div className="training-top-text training">Trånkan</div>
            <img src={trainingBild} alt="Trånkan Training" />
            <div className="training-bottom-text training">Training</div>
          </div>
          <div className="projects-ss" onClick={() => navigate("/projects/sillystocks")}>
            <div className="ss-top-text ss">SILLY</div>
            <img src={ssBild} alt="Silly Stocks" />
            <div className="ss-bottom-text ss">STOCKS</div>
          </div>
          <div className="projects-sund" onClick={() => navigate("/projects/sundnergarden")}>
            <div className="sund-top-text sund">Sund</div>
            <img src={sundBild} alt="Sund Nergården" />
            <div className="sund-bottom-text sund">Nergården</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
