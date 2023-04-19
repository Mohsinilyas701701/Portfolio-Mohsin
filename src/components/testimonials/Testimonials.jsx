import React from "react";

import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Syeda Misbah",
    review:
      "Mohsin is highly recommended for creating frontend layouts of modern websites. He write neat codes and use modern tools and technologies to enhance your business websites.",
  },
  {
    avatar: AVTR2,
    name: "Baqir Ali",
    review:
      "He is so talented and hardwork. He finish his work on time and meet deadlines. Highly recommended for short deadlines.",
  },

  {
    avatar: AVTR3,
    name: "Steven",
    review:
      "I have worked with him for more than 4 months. He is amazing at his work. He is so collaborative and a great team member.",
  },

  {
    avatar: AVTR4,
    name: "Maryam Gillani",
    review:
      "Mohsin is one of the finest co-workers I have worked with. He is so focused and pays attention to his work. He is the best option for frontend developer.",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonial_container' spaceBetween={40} slidesPerView={1}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} alt='' />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
