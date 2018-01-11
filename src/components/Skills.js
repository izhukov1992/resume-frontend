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
            {this.props.skills !== undefined && this.props.skills.map((skill) =>
              <Skill key={skill.id}
                     type={skill.type} />
            )}
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
