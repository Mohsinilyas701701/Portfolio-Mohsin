import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id='#footer'>
      <a href='' className='footer_logo'>
        Muhammad Mohsin Ilyas
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer_icons'>
        <a href='https://facebook.com'>
          <FaFacebookSquare />
        </a>
        <a href='https://instagram.com'>
          <FiInstagram />
        </a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Mohsin Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
