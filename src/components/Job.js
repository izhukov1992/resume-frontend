import React from 'react';

class Job extends React.Component {
 render() {
   return (
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Python/Django Web Developer</h3>
              <div className="subheading mb-3">Self-employed</div>
              <p>Web applications development based on Python/Django and JavaScript frameworks.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2014 - Present</span>
            </div>
          </div>
    );
  }
}

export default Job;
