import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5cqm3d9", "template_gha1kms", form.current, "df8TPiZz-ZfFJNmMP");
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon' />
            <h4>Email</h4>
            <h5>mohsinilyas6683@gmail.com</h5>
            <a href='mailto:mohsinilyas6683@gmail.com' target='_blank'>
              {" "}
              Send a Message
            </a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_icon' />
            <h4>WhatsApp</h4>
            <h5>0304-4801610</h5>
            <a href='https://api.whatsapp.com/send?phone+923044801610' target='_blank'>
              {" "}
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter Your Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
