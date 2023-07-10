import React, { useRef } from 'react';
// import {DiJavascript} from 'react-icons/di';
import { useSwipeable } from 'react-swipeable';
import './Experience.css';

function Experience() {
  const containerRef = useRef(null);

  const handleSwipedLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };

  const handleSwipedRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (
    <div>
      <section className="experience" id="experience" {...swipeHandlers}>
        <h1 className="heading">
          <span> my </span> experience
        </h1>

        <div className="box-container" ref={containerRef}>
          <div className="box tilt">
            <i className="fas fa-atom"></i>
            {/* <i className="fab fa-js"></i> */}

            <h3>ReactJS Developer</h3>
            <span>At</span>
            <h4>
              Signimus Technologies Pvt Ltd, <span>Indore</span>
            </h4>
            <span>Nov 2022 to Present</span>
            <p>
              <span>
                {' '}
                • Developed and maintained web applications using NextJs,
                ReactJS and Redux, JavaScript, TypeScript with related frontend
                technologies, used MatetialUI, Bootstrap
              </span>
              <br />
              {/* <span>
                • Collaborated with product owners and designers to gather
                requirements and ensure UI/UX best practices
              </span><br/> */}
              <span>
                • Worked closely with back-end developers to integrate front-end
                components with back-end APIs.
              </span>
              <br />
              {/* <span>
                • Participated in code reviews to ensure best practices and
                coding standards were followed. Used OpenAI, Firebase, Google
                Sheet for storing data.
              </span> */}
              <span>• Works on company's original website.</span>
              <br />
              <span>• Handle website as per SEO</span>
            </p>
          </div>

          <div className="box tilt">
            <i className="fas fa-laptop-code"></i>
            <h3>Teaching Assistant</h3>
            <span>At</span>
            <h4>
              Coding Ninjas, <span>Banglore</span>
            </h4>
            <span>Jan 2023 to June 2023</span>
            <p>
              <span>• Solved over 900+ doubts</span>
              <br />
              <span>• Fixes Bugs , Contribute on various projects</span>
              <br />
              <span>• Help Students in completing their projects.</span>
              <br />
              <span>• Fixes bugs in all web development projects.</span>
            </p>
          </div>

          <div className="box tilt">
            <i className="fas fa-atom"></i>
            <h3>ReactJS Developer</h3>
            <span>At</span>
            <h4>
              Socialwell Technologies Pvt Ltd, <span>Banglore</span>
            </h4>
            <span>Apr 2022 to Aug 2022</span>
            <p>
              <span> • Leading Front-end Design</span>
              <br />
              <span> • Developed User Interface using ReactJS</span>
              <br />
              <span>
                • Finding real time handed bugs after completion of the
                respective module.
              </span>
              <br />
              <span>• Works on company's original website.</span>
            </p>
          </div>

          <div className="box tilt">
            <i className="fas fa-laptop"></i>
            <h3>Front-end Developer</h3>
            <span>At</span>
            <h4>
              Central Coalfield limited, <span> Ranchi</span>
            </h4>
            <span>Jan 2020 to Feb 2020</span>
            <p>
              <span>• Works on Registration Page</span>
              <br />
              <span>• Project Given:- Bank Management System</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
