import React from 'react';
import me from '../images/profile-pic.jpeg';
// import { IoLogoWhatsapp } from 'react-icons/io';
// import { AiFillGithub, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <img className="tilt" src="https://w7.pngwing.com/pngs/875/236/png-transparent-computer-programming-technology-code-org-project-coder-game-electronics-computer-programming.png" alt="" />
          <div className='home-text'>
          <h3>
            Shama Parveen
          </h3>
          <p>
            i am a <span className="typing-text"> Front End Developer </span>
          </p>
          <a href="#about" className="btn">
            About me
          </a>
          </div>
          
        </div>
        {/* <img className="tilt" src={develop} alt="" /> */}
      </section>
    </div>
  );
}

export default Home;
