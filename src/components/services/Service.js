import React from 'react'

function Service() {
  return (
    <div>
    <section className="services" id="services">
      <h1 className="heading"><span> my </span> services</h1>

      <div className="box-container">
        <div className="box tilt">
          <i className="fas fa-code"></i>
          <h3>Web development</h3>
          <p>Made many projects using :- <br/>HTML, CSS, JavaScript, <br/>ReactJs, NextJs, TypeScript</p>
        </div>

        <div className="box tilt">
          <i className="fas fa-bullhorn"></i>
          <h3>Teaching</h3>
          <p>Teaches many students about coding<br/>
          Worked as a Teaching Assistant At Coding Ninjas</p>
        </div>

        <div className="box tilt">
          <i className="fas fa-mobile"></i>
          <h3>Responsive designs</h3>
          <p>
            Made responsive designs in HTML using CSS, Also by using ReactJS.
          </p>
        </div>
      </div>
    </section></div>
  )
}

export default Service
