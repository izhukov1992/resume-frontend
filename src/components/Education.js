import React from 'react';
import University from './University.js';

class Education extends React.Component {
 render() {
   return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>
          <University />
          <University />
          <University />
        </div>
      </section>
    );
  }
}

export default Education;
