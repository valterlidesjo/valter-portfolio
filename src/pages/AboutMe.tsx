import "./styles/_aboutMe.scss";
import resa from "../assets/bildresa.webp";
import surf from "../assets/bildsurf.webp";
import valterida from "../assets/valterida.webp";
import { useNavigate } from "react-router";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="about-me-container">
        <div className="about-me-header">
          <p>about me</p>
        </div>
        <div className="about-me-text">
          <p>
            20 year old man named valter lidesjö. living in an apartment with my
            girlfriend in the southside of stockholm. born and raised in
            southside of stockholm. oldest sibling out of four. loved hammarby
            all my life. studying, working on my own <span className="blue-p" onClick={() => navigate("/projects")}>projects</span> and working extra
            in a store close by. <br />
            love travelling, working out, reading, spending time with my friends
            family and girlfriend. music is also a big part of my life. techno,
            house, reggae, rap, pop, dnb/ukg etc. <br />
            always loved challenges and pushing limits. started coding after my
            first long trip with the ambition to be able to work anywhere in the
            world. grinding to make my ambition reality. <br /> <br />
            thank you for taking your time learning a bit about me, på
            återseende
          </p>
        </div>
        <div className="about-me-images">
          <img src={resa} alt="Me in Mexico" />
          <img src={valterida} alt="Me and Ida" />
          <img src={surf} alt="Me surfing in Malibu" />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
