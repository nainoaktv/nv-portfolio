import React from 'react';
import './About.css'
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";


function About() {

  return (
    <div className="about_page">
      <h3><strong><u>Skills</u></strong></h3>
      <div id='all_icons'>
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
        <hr />
      </div>
      <br />
      <div id='about_nainoa'>
        <h3><u>About</u></h3>
        <h2>Nainoa Kaloheaulani Tavake Villegas</h2>
        <p>Born & Raised in Waianae, HI on the island of Oahu.</p>
        <p>US Navy Veteran</p>
        <p>Gamer | Content Creator | Video Editor | Software Engineer</p>
        <p><em>With my passion for technology, learning, and solving problems. I know I can become a valuable asset to any company or team that gives me the opportunity to join them. As a Native Hawaiian, our work ethic derives from our culture. Hard work, passion, and motivation for the things and people we love is hardwired into all of us. I will continue to show everyone what Aloha truly means and produce high end solutions for any problem given to me and my team.</em></p>
      </div>
    </div>
  )
}

export default About;

// react-icon not working properly on netlify