import React from 'react';
import Logo from '../connectwithme/Logo';
import contact from '../images/contact-image.png';
// import { IoLogoWhatsapp } from 'react-icons/io';
// import { AiFillGithub, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <h1 className="heading">
          contact <span> me </span>
        </h1>

        <div className="row">
          <div className="image">
            <img className="tilt" src={contact} alt="" />
          </div>

          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>

            <input type="text" placeholder="subject" className="box" />

            <textarea
              placeholder="message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <input type="submit" className="btn" value="send message" />
          </form>
        </div>
        
      </section>

      {/* <div style={{backgroundColor: 'white'}}>
                  <Logo/>

        </div> */}
    </div>
  );
}

export default Contact;
