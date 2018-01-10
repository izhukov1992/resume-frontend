import React from 'react';
import Job from './Job.js';

class Experience extends React.Component {
 render() {
   return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          <Job />
          <Job />
          <Job />
        </div>
      </section>
    );
  }
}

export default Experience;
