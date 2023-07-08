import React from 'react';
import about from '../images/portfo-2.jpeg';
import { IoIosSquare } from 'react-icons/io';
import Logo from '../connectwithme/Logo';


function About() {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          about <span>me</span>
        </h1>

        <div className="row">
          <div className="image">
            <img className="tilt" src={about} alt="" />
          </div>

          <div className="content">
            <h3>
              my name is <span> Shama Parveen </span>
            </h3>
            <p className="info">
              I am a Front end Developer with decent technical experience.
              Skilled in JavaScript, ReactJs, NextJs, Web development,
              and also focused with some backend technologies ...
<br/>
            <b>  Worked as Teaching Assistant at Coding Ninjas.</b>
        <br/>      Have done various projects using these technologies.
            </p>
            <p>
              <span id="info-1"><IoIosSquare/> Passionate about Coding</span>
            </p>
            <p>
              <span id="info-2">
                {' '}
               <IoIosSquare/> Looking for more challenging work and learning opportunities.
              </span>
            </p>
            <p>
            <span id="info-3"><IoIosSquare/> Worked on Projects using various Frontend Technologies .</span>
            </p>
            <div className="box-container">
              <div className="box">
                <b><p>
                  <span> email : </span> shamap249@gmail.com
                </p></b>
                {/* <p>
                  <span> phone : </span> <a  target="_blank"
                      rel="noopener noreferrer"
                      href="tel:+91 7004552960"

                      style={{ cursor: 'pointer', color: 'black' }}
                    >+91 7004552960</a> 
                </p> */}
                {/* <p>
                  <span> address : </span> Ranchi, India - 834004
                </p>
                 */}
                {/* <p>
                  <a href="https://github.com/Shama-Coder7/"><AiFillGithub/></a>
                </p> */}
                {/* <Logo/> */}
              </div>
            </div>
            {/* <a
              href="https://www.linkedin.com/in/shama-parveen-46435a200/"
              className="btn"
            >
              LinkedIn
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
