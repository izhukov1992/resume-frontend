import React from 'react';
import Social from './Social.js';

class Socials extends React.Component {
 render() {
   return (
          <ul className="list-inline list-social-icons mb-0">
            {[1,2,3].map((number) => 
              <Social key={number} />
            )}

            <Social />
            <Social />
            <Social />

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
    );
  }
}

export default Socials;
