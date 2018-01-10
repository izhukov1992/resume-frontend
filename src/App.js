import React from 'react';

class App extends React.Component {
   render() {
      return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Start Bootstrap</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="static/assets/img/profile.jpg" alt="" />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container-fluid p-0">

      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Ilya
            <span className="text-primary">Zhukov</span>
          </h1>
          <div className="subheading mb-5">
            <a href="mailto:izhukov1992@gmail.com">izhukov1992@gmail.com</a>
          </div>
          <p className="mb-5">Hello, my name is Ilya and I'm Python/Django full-stack web developer.<br/>
          I build and support web appplications based on Django/DRF and AngularJS/Backbone.<br/>
          I believe that communication and following the specs are keys to successful collaboration.<br/>
          Feel free to contact. Have a nice day!</p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/izhukov1992" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/izhukov1992" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.upwork.com/freelancers/~017706cf4eb2bc5de3" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <svg className="fa fa-stack-1x fa-inverse upwork" viewBox="0 0 16.79 12">
                    <path d="M13,1A3.82,3.82,0,0,0,9.3,4.13,16.77,16.77,0,0,1,7.4,0H5.5V5A1.8,1.8,0,0,1,1.9,5V0H0V5A3.7,3.7,0,1,0,7.4,5V4.17A16.14,16.14,0,0,0,8.77,6.45L7.59,12H9.53l0.85-4A4.81,4.81,0,0,0,13,8.73a3.83,3.83,0,0,0,3.79-3.89A3.81,3.81,0,0,0,13,1Zm0,5.74a3.38,3.38,0,0,1-2.13-.85l0.19-.76v0c0.14-.81.57-2.18,2-2.18a1.9,1.9,0,0,1,1.9,1.9A2,2,0,0,1,13,6.78Z"/>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

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

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">C++/VoIP Developer</h3>
              <div className="subheading mb-3">MERA NN</div>
              <p>VoIP client-side infrastructure development.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2013 - Present</span>
            </div>
          </div>

        </div>

      </section>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

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

        </div>
      </section>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <i className="devicons devicons-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-django"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-javascript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-jquery"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-heroku"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-linux"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-git"></i>
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>Apart from being a web developer, I like to spend my time with friends and relatives, visit pubs and other public places. Also, I like active rest like footall, volleyball, skiing and skating.</p>
          <p>I enjoy music, especially rock music, but actually, I'm meloman. Beign a child I was studing in music school and played a bass in folk band. Recently, I bought Fender Telecaster and now I'm doing my first steps in playing a rock :)</p>
        </div>
      </section>

    </div>
  </div>
      );
   }
}

export default App;
