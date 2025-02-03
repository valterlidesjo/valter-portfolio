import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import "./styles/_footer.scss";
import { Link } from 'react-router';

const Footer = () => {

  return (
    <>
    <div className="footer-container">
        <div className="footer-top-container">
        <div className="footer-left">
            <a className="left-1" href='https://github.com/valterlidesjo' target='_blank'>
                <FaGithub className='github'/>
                <p>Github</p>
            </a>
            <a className="left-2" href='https://www.linkedin.com/in/valterlidesjo/' target='_blank'>
                <FaLinkedin className='linkedin'/>
                <p>LinkedIn</p>
            </a>
            <a className="left-3" href='mailto:valle.lidesjo@gmail.com'>
                <SiGmail className='mail'/>
                <p>valle.lidesjo@gmail.com</p>
            </a>
        </div>
        <div className="footer-right">
            <Link to={"/"} className="right-1" >
                <p>Home</p>
            </Link>
            <Link to={"/projects"} className="right-2" >
                <p>Projects</p>
            </Link>
            <Link to={"/about-me"} className="right-3" >
                <p>About Me</p>
            </Link>

        </div>
        </div>
        <Link to={"/"} className="footer-bottom">
            <p >Made by Valter Lidesjö</p>
        </Link>
    </div>
    </>
  )
}

export default Footer