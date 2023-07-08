import React from 'react';
import contact from '../images/contact-image.png';
// import { IoLogoWhatsapp } from 'react-icons/io';
// import { AiFillGithub, AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

function Contact() {
  return (
    <div>
      <div className="contact" id="contact">
        <h1 className="heading">
          Get In <span> Touch </span>
        </h1>

        <div className="footer">
          <div className="row">
            {/* <div className="image">
              <img className="tilt" src={contact} alt="" />
            </div> */}

            <footer className="footer">
              <div className="social-icons">
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Shama-Coder7/"
                >
                  <AiFillGithub
                    className="logo-github"
                    // style={{ height: '50px', width: '20px' }}
                  />{' '}
                </a>
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/shama-parveen-46435a200/"
                >
                  <BsLinkedin
                    className="logo-linkedin"
                    // style={{ height: '50px', width: '20px' }}
                  />{' '}
                </a>
                <a href="mailto: shamap249@gmail.com?subject=Mail via Portfolio">
                  {' '}
                  <AiOutlineMail
                    // style={{ height: '50px', width: '20px' }}
                  />{' '}
                </a>
              </div>
            </footer>

            {/* <div className="getIn-touch">
              <div>
                {' '}
                <p
                >
                  GitHub
                </p>
                <a href="https://github.com/Shama-Coder7/">
                  {' '}
                  <AiFillGithub
                    className="logo-github"
                    style={{ height: '50px', width: '20px' }}
                  />
                </a>
                <p
                >
                  LinkedIn
                </p>{' '}
                <a href="https://www.linkedin.com/in/shama-parveen-46435a200/">
                  <BsLinkedin
                    className="logo-linkedin"
                    style={{ height: '50px', width: '20px' }}
                  />
                </a>
               </div>
            </div> */}
            {/* <form action="">
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
          </form> */}
          </div>
        </div>
      </div>

      {/* <div style={{backgroundColor: 'white'}}>
                  <Logo/>

        </div> */}
    </div>
  );
}

export default Contact;
