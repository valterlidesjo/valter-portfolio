import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import "./styles/_footer.scss";
import { useNavigate } from 'react-router';

const Footer = () => {
    const navigate = useNavigate();

  return (
    <>
    <div className="footer-container">
        <div className="footer-top-container">
        <div className="footer-left">
            <div className="left-1" onClick={() => window.open('https://github.com/valterlidesjo', '_blank')}>
                <FaGithub className='github'/>
                <p>Github</p>
            </div>
            <div className="left-2" onClick={() => window.open('https://www.linkedin.com/in/valterlidesjo/', '_blank')}>
                <FaLinkedin className='linkedin'/>
                <p>LinkedIn</p>
            </div>
            <div className="left-3" onClick={() => window.location.href = 'mailto:valle.lidesjo@gmail.com'}>
                <SiGmail className='mail'/>
                <p>valle.lidesjo@gmail.com</p>
            </div>
        </div>
        <div className="footer-right">
            <div className="right-1" onClick={() => navigate("/")}>
                <p>Home</p>
            </div>
            <div className="right-2" onClick={() => navigate("/projects")}>
                <p>Projects</p>
            </div>
            <div className="right-3" onClick={() => navigate("/about-me")}>
                <p>About Me</p>
            </div>

        </div>
        </div>
        <div className="footer-bottom">
            <p onClick={() => navigate("/")}>Made by Valter Lidesjö</p>
        </div>
    </div>
    </>
  )
}

export default Footer