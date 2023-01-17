import React from 'react';
import Logo from '../connectwithme/Logo';
// import me from '../images/me-1.jpg';
import develop from '../images/portfoanimi-5-unscreen.gif';
// import { IoLogoWhatsapp } from 'react-icons/io';
// import { AiFillGithub, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

function Home() {
  return (
    <div>

      <section className="home" id="home">
      
        <div className="content">
          {/* <img className="tilt" src={me} alt="" /> */}
          <h3>
            Shama<span>Parveen</span>
          </h3>
          <p>
            i am a <span className="typing-text"> Front End Developer </span>
          </p>
          <a href="#about" className="btn">
            About me
          </a>

        </div>
        <img className="tilt" src={develop} alt="" />

      </section>

    </div>
  );
}

export default Home;
