import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillGithub, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

function Logo() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '40px',
        }}
      >
        <a href="https://github.com/Shama-Coder7/">
          {' '}
          <AiFillGithub
            className="logo-github"
            style={{ height: '50px', width: '20px' }}
          />
        </a>
        <a href="https://wa.me/919709051341">
          <IoLogoWhatsapp
            className="logo-whatsapp"
            style={{ height: '50px', width: '20px' }}
          />
        </a>{' '}
        <a target="blank" rel="noopener noreferrer" href="tel:+91 7004552960">
          <AiFillPhone
            className="logo-phone"
            style={{ height: '50px', width: '20px' }}
          />
        </a>
        {/* <a target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:shamap249@gmail.com"
                        ><AiOutlineMail className='logo-mail' style={{height: '50px', width:'20px'}}/><br/>shamap249@gmail.com</a> */}
      </div>
    </div>
  );
}

export default Logo;
