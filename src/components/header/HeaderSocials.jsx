import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/mohsin-ali-436134209/' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/Mohsinilyas701701' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://www.facebook.com/profile.php?id=100063637503426' target='_blank'>
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
