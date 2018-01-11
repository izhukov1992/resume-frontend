import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{this.props.university}</h3>
          <div className="subheading mb-3">{this.props.grade}</div>
          <div>this.props.specialization</div>
        </div>
        <div className="resume-date text-md-right">
          {this.props.fire === null ? (
            <span className="text-primary">{this.props.start} - Present</span>
          ) : (
            <span className="text-primary">{this.props.start} - {this.props.end}</span>
          )}
        </div>
      </div>
    );
  }
}

export default Experience;
