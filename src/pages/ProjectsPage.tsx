import "./styles/_projectsPage.scss";
import { Link } from "react-router";
import ssBild from "../assets/svartssbild.png";
import ssBildW from "../assets/svartssbild.webp";
import picBild from "../assets/picshare.png";
import picBildW from "../assets/picshare.webp";
import sundBild from "../assets/sundbild.jpeg";
import sundBildW from "../assets/sundbild.webp";
import trainingBild from "../assets/trainingbild.jpg";
import trainingBildW from "../assets/trainingbild.webp";
import terniBild from "../assets/terni-screen.png";
import terniBildW from "../assets/terni-screen.webp";

const ProjectsPage = () => {
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
            <Link to={"/projects/trankantraining"} className="blue-p">
              trånkan training
            </Link>{" "}
            <br /> <br />
            learned typescript, scss, node, mongodb and express with smaller
            projects. cms with localstorage, weather app with mongo, express and
            node. felt comfortable with that so started learning react to
            complete the full mern stack and fell in love <br /> <br />
            instantly started a bigger project with three classmates.{" "}
            <Link to={"/projects/sillystocks"} className="blue-p">
              silly stocks
            </Link>{" "}
            a stock browsing website. made all the backend with node, mongo and
            express but also the frontend to complete my mern stack. <br />{" "}
            <br />
            found a family friends website for their luxurios getaway that
            needed some love. made a new website for{" "}
            <Link to={"/projects/sundnergarden"} className="blue-p">
              sund nergården
            </Link>{" "}
            in react and scss. started by teaching myself figma and made a skiss
            and then turned it into a website. only frontend project so focused
            on good reusable and scalable code with nice structure. <br />{" "}
            <br />
            got a fun assignment in school to built a restaurant website with a
            booking component. had an api for all the crud operations and was
            supposed to built the frontend component around it. made the
            restaurant{" "}
            <Link to={"/projects/terni"} className="blue-p">
              terni
            </Link>{" "}
            with three classmates.
            <br />
            <br />
            started to learn next and firebase in preperation for my internship
            at{" "}
            <Link
              to={"https://www.doneservices.se/"}
              className="blue-p"
              target="_blank"
            >
              done.
            </Link>{" "}
            made a social media app called{" "}
            <Link to={"/projects/picshare"} className="blue-p">
              pic share
            </Link>{" "}
            where users can upload images, browse a gallery, follow people,
            comment and browse a personal feed. <br />
            used many firebase techniques such as firestore, authentication,
            storage, cloud functions, app hosting, exstensions - algolia <br />{" "}
            <br />
            <br />
            check out my projects down below, <br />
            love valter
          </p>
        </div>
        <div className="projects">
          <Link to={"/projects/trankantraining"} className="projects-tt">
            <div className="training-top-text training">Trånkan</div>
            <picture>
              <source srcSet={trainingBildW} type="image/webp" />
              <img src={trainingBild} alt="Trånkan training image" />
            </picture>
            <div className="training-bottom-text training">Training</div>
          </Link>
          <Link to={"/projects/sillystocks"} className="projects-ss">
            <div className="ss-top-text ss">SILLY</div>
            <picture>
              <source srcSet={ssBildW} type="image/webp" />
              <img src={ssBild} alt="Silly Stocks image" />
            </picture>
            <div className="ss-bottom-text ss">STOCKS</div>
          </Link>
          <Link to={"/projects/sundnergarden"} className="projects-sund">
            <div className="sund-top-text sund">Sund</div>
            <picture>
              <source srcSet={sundBildW} type="image/webp" />
              <img src={sundBild} alt="Sund Nergården image" />
            </picture>
            <div className="sund-bottom-text sund">Nergården</div>
          </Link>
          <Link to={"/projects/terni"} className="projects-terni">
            <div className="terni-top-text terni">Terni</div>
            <picture>
              <source srcSet={terniBildW} type="image/webp" />
              <img src={terniBild} alt="Terni restaurant image" />
            </picture>
          </Link>
          <Link to={"/projects/picshare"} className="projects-picshare">
            <div className="picshare-top-text picshare">Pic</div>
            <picture>
              <source srcSet={picBildW} type="image/webp" />
              <img src={picBild} alt="Picshare logo" />
            </picture>
            <div className="picshare-bottom-text picshare">Share</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
