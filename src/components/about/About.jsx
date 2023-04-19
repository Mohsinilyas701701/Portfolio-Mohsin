import React from "react";
import "./about.css";
import AboutImg from "../../assets/Mohsin-dp.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={AboutImg} alt='' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_card_icon' />
              <h5>Experienced</h5>
              <small>1+ Year</small>
            </article>
            {/* <article className='about_card'>
              <FiUsers className='about_card_icon' />
              <h5>Clients</h5>
              <small>5+</small>
            </article> */}
            <article className='about_card'>
              <VscFolderLibrary className='about_card_icon' />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            I'm a ReactJs Developer having experience in UI/UX design conversion. I have strong
            hands-on Frontend tools and technologies. I was a tech blogger and got inspiration from
            development and moved to the development field. I am working in different technologies
            such as HTML, CSS3, Bootstrap5, and preprocessors. I also work in JavaScript and ReactJS
            and create Single Page Applications (SPA's). I'm also familiar with API integration,
            Fetch APIs, and Axios. I can turn innovative ideas into reality with my skills and
            experience.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
