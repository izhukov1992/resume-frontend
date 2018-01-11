import React from 'react';
import Socials from './Socials.js';

class About extends React.Component {
 render() {
   return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">{this.props.profile.first_name}
            <span className="text-primary">{this.props.profile.last_name}</span>
          </h1>
          <div className="subheading mb-5">
            <a href="mailto:{this.props.profile.email}">{this.props.profile.email}</a>
          </div>
          <p className="mb-5">{this.props.profile.resume}</p>
          <Socials socials={this.props.profile.socials} />
        </div>
      </section>
    );
  }
}

export default About;
