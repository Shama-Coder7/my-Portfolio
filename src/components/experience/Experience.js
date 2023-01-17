import React from 'react';

function Experience() {
  return (
    <div>
      <section className="experience" id="experience">
        <h1 className="heading">
          <span> my </span> experience
        </h1>

        <div className="box-container">
          <div className="box tilt">
            <i className="fas fa-atom"></i>
            <h3>ReactJS Developer</h3>
            <span>At</span>
            <h4>
              Socialwell Technologies Pvt Ltd, <span>Banglore</span>
            </h4>
            <p>
              <span> • Leading Front-end Design</span>
              <span> • Developed User Interface using ReactJS</span>
              <span>
                • Finding real time handed bugs after completion of the
                respective module.
              </span>
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
            <p>
              <span>• Works on Registration Page</span>
              <span>• Project Given:- Bank Management System</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
