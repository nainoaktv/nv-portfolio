import './About.css'
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

function About() {

  return (
    <div className="about-section">
      <h1>ALOHA 🤙🏼</h1>
      <p><strong>I'm Nainoa Kaloheaulani Tavake Villegas</strong></p>
      <p>Born & Raised in Waianae, HI on the island of Oahu</p>
      <br />
      <h5><strong><u>Skills</u></strong></h5>
      <FaIcons.FaCss3Alt className='skill_icons' />
      <FaIcons.FaHtml5 className='skill_icons' />
      <SiIcons.SiJavascript className='skill_icons' id='js_icon'/>
      <FaIcons.FaPython className='skill_icons' />
      <SiIcons.SiMongodb className='skill_icons' id='mongo_icon'/>
      <SiIcons.SiExpress className='skill_icons' id='express_icon'/>
      <FaIcons.FaReact className='skill_icons' id='react_icon'/>
      <FaIcons.FaNodeJs className='skill_icons' id='nodeJS_icon'/>
      <SiIcons.SiPostgresql className='skill_icons' id='psql_icon'/>
      <SiIcons.SiDjango className='skill_icons' id='django_icon'/>
      <SiIcons.SiFlask className='skill_icons' id='flask_icon'/>
    </div>
  )
}

export default About;