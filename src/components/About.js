import React from 'react';
import Socials from './Socials.js';

class About extends React.Component {
 render() {
   return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <div className="subheading mb-5">
            <a href="mailto:izhukov1992@gmail.com">izhukov1992@gmail.com</a>
          </div>
          <p className="mb-5">Hello, my name is Ilya and I'm Python/Django full-stack web developer.<br/>
          I build and support web appplications based on Django/DRF and AngularJS/Backbone.<br/>
          I believe that communication and following the specs are keys to successful collaboration.<br/>
          Feel free to contact. Have a nice day!</p>
          <Socials />
        </div>
      </section>
    );
  }
}

export default About;
