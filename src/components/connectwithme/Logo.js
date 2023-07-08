import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

function Logo() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {' '}
        <p style={{ fontSize: '22px', display: 'flex', alignItems: 'center' }}>
          GitHub
        </p>
        <a href="https://github.com/Shama-Coder7/">
          {' '}
          <AiFillGithub
            className="logo-github"
            style={{ height: '50px', width: '20px' }}
          />
        </a>
        <p style={{ fontSize: '22px', display: 'flex', alignItems: 'center' }}>
          LinkedIn
        </p>{' '}
        <a href="https://www.linkedin.com/in/shama-parveen-46435a200/">
          <BsLinkedin
            className="logo-linkedin"
            style={{ height: '50px', width: '20px' }}
          />
        </a>
        {/* <a target="blank" rel="noopener noreferrer" href="tel:+91 7004552960">
          <AiFillPhone
            className="logo-phone"
            style={{ height: '50px', width: '20px' }}
          />
        </a> */}
        {/* <a target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:shamap249@gmail.com"
                        ><AiOutlineMail className='logo-mail' style={{height: '50px', width:'20px'}}/><br/>shamap249@gmail.com</a> */}
      </div>
    </div>
  );
}

export default Logo;
