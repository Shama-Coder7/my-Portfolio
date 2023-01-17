import React from 'react';
import image1 from '../images/img-1.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.avif';
import image4 from '../images/img-4.jpg';
import image5 from '../images/img-7.png';
import image6 from '../images/img-6.png';

function Project() {
  return (
    <div>
      <section className="portfolio" id="portfolio">
        <h1 className="heading">
          <span> my </span> projects
        </h1>

        <div className="box-container">
          <div className="box tilt">
            <img src={image1} alt="" />
            <div className="content">
              <a href="https://silly-mccarthy-58aafb.netlify.app/" className="btn">
                Know more
              </a>
            </div>
          </div>

          <div className="box tilt">
            <img src={image2} alt="" />
            <div className="content">
              <a href=" https://amazing-joliot-454cbd.netlify.app/" className="btn">
                Know more
              </a>
            </div>
          </div>

          <div className="box tilt">
            <img src={image3} alt="" />
            <div className="content">
              <a href="https://deluxe-kitten-b654d8.netlify.app/" className="btn">
                Know more
              </a>
            </div>
          </div>

          <div className="box tilt">
            <img src={image4} alt="" />
            <div className="content">
              <a
                href=" https://compassionate-minsky-56e3e3.netlify.app/"
                className="btn"
              >
                Know more
              </a>
            </div>
          </div>

          <div className="box tilt">
            <img src={image5} alt="" />
            <div className="content">
              <a
                href="https://remarkable-baklava-119d52.netlify.app/"
                className="btn"
              >
                Know more
              </a>
            </div>
          </div>

          <div className="box tilt">
            <img src={image6} alt="" />
            <div className="content">
              <a href="#" className="btn">
                Know more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
