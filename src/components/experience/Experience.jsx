import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Bootstrap5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Material UI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>JQuery</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className='soft_skills'>
          <h3>Soft Skills</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Good Communication</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Excellent Writing</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Time Management</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Problem Solving</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Brainstorming new Ideas</h4>
              </div>
            </article>
          </div>
        </div>
        <div className='other_tools'>
          <h3>Other Tools</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Github</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Canva</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Trello</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Slack</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
