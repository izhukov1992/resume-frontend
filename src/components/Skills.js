import React from 'react';
import Skill from './Skill.js';

class Skills extends React.Component {
 render() {
   return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <Skill />
            <Skill />
            <Skill />

            <li className="list-inline-item">
              <i className="devicons devicons-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-django"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-javascript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-jquery"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-heroku"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-linux"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-git"></i>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
