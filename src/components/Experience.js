import React from 'react';
import Job from './Job.js';

class Experience extends React.Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          {this.props.jobs !== undefined && this.props.jobs.map((job) =>
            <Job key={job.id}
                 hire={job.hire}
                 fire={job.fire}
                 position={job.position}
                 organization={job.organization}
                 description={job.description} />
          )}
        </div>
      </section>
    );
  }
}

export default Experience;
