import React from 'react';

class Job extends React.Component {
  render() {
    return (
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{this.props.position}</h3>
          <div className="subheading mb-3">{this.props.organization}</div>
          <p>{this.props.description}</p>
        </div>
        <div className="resume-date text-md-right">
          {this.props.fire === null ? (
            <span className="text-primary">{this.props.hire} - Present</span>
          ) : (
            <span className="text-primary">{this.props.hire} - {this.props.fire}</span>
          )}
        </div>
      </div>
    );
  }
}

export default Job;
