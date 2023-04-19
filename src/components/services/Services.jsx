import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Blogging Websites</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>CRM Softwares</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Healthcare Websites</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Chatbots</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Websites for SME's</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Gaming Websites</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
      </div>
    </section>
  );
};

export default Services;
