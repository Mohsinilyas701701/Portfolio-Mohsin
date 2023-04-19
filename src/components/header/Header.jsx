import React from "react";
import "./header.css";
import CTA from "./CTA";
import MyImage from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <section className='container container_header'>
        <h5>Hello, I'm</h5>
        <h1>Muhammad Mohsin Ilyas</h1>
        <h5 className='text-light'>REACTJS DEVELOPER</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={MyImage} alt='' />
        </div>

        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </section>
    </header>
  );
};

export default Header;
