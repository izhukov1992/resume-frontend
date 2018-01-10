import React from 'react';

class Experience extends React.Component {
 render() {
   return (
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Nizhny Novgorod State Technical University n.a. R.E. Alekseev</h3>
              <div className="subheading mb-3">Specialist</div>
              <div>Information Systems and Technology</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2010 - June 2015</span>
            </div>
          </div>
    );
  }
}

export default Experience;
