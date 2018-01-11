import React from 'react';
import About from './About.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Skills from './Skills.js';
import Interests from './Interests.js';

class Content extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <About profile={this.props.profile} />
        <Experience jobs={this.props.profile.jobs} />
        <Education educations={this.props.profile.educations} />
        <Skills skills={this.props.profile.skills} />
        <Interests interests={this.props.profile.interests} />
      </div>
    );
  }
}

export default Content;
