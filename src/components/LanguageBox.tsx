import { FaReact, FaHtml5, FaSass, FaNode, FaPhp } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript, SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const LanguageBox = () => {
  return (
    <>
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
    </>
  )
}

export default LanguageBox