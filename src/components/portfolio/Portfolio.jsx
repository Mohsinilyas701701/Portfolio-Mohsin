import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG1} alt='' />
          </div>
          <h3>xewai.com</h3>
          <div className='portfolio_item_cta'>
            <a href='http://www.xewai.com/' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Nextjobpro.com</h3>
          <div className='portfolio_item_cta'>
            <a href='https://www.nextjobpro.com/' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG3} alt='' />
          </div>
          <h3>News App</h3>
          <div className='portfolio_item_cta'>
            <a
              href='https://github.com/Mohsinilyas701701/NewsMonkey--Function-Based-React-App'
              className='btn'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Mega World Gaming App</h3>
          <div className='portfolio_item_cta'>
            <a
              href='https://github.com/Mohsinilyas701701/Mega-World'
              className='btn'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG5} alt='' />
          </div>
          <h3>V7 labs</h3>
          <div className='portfolio_item_cta'>
            <a href='https://www.v7labs.com/' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG6} alt='' />
          </div>
          <h3>TextUtils</h3>
          <div className='portfolio_item_cta'>
            <a
              href='https://github.com/Mohsinilyas701701/TextUtils'
              className='btn'
              target='_blank'
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
