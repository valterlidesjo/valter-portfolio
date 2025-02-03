import { Link } from "react-router";
import "./styles/_showProjects.scss";

interface ShowProjectProps {
    header: string;
    mobile: string;
    desktop: string;
    fontFamily: string;
    fontWeight?: string;
    fontSize: string;
    aboutText: string;
    website?: string;
    url?: string;
    padding?: string;
}

const ShowProject: React.FC <ShowProjectProps> = ({ header, desktop, mobile, fontFamily, fontWeight, fontSize, aboutText, website, url, padding }) => {
  return (
    <>
        <div className="show-projects-container">
            <div className="show-projects-header" style={{ fontFamily: fontFamily, fontWeight: fontWeight, fontSize: fontSize }}>
                {header}
            </div>
            <div className="show-devices-container">
                <div className="show-mobile" >
                    <img src={mobile} alt="Mobile" style={{ paddingBottom: padding }} />
                </div>
                <div className="show-desktop">
                    <img src={desktop} alt="Desktop" />
                </div>
            </div>
            <div className="about-project">
                <div className="about-project-header">
                    <p>the project</p>
                </div>
                <div className="about-project-text">
                    <p>{aboutText}</p>
                </div>
                {website && url && (
                <div className="website">
                    <p>-website</p>
                    <Link to={url} className="blue-p">{website}</Link>
                </div>
                )}
            </div>
        </div>
    </>
  )
}

export default ShowProject