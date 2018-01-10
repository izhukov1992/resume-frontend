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
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
    </div>
    );
  }
}

export default Content;
