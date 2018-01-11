import React from 'react';
import {SOCIALS, UPWORK} from '../constants/Socials.js';

class Social extends React.Component {
  render() {
    const type = SOCIALS[this.props.type];
    return (
      <li className="list-inline-item">
        <a href="{this.props.url}" target="_blank">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            {type === UPWORK ? (
              <svg className="fa fa-stack-1x fa-inverse upwork" viewBox="0 0 16.79 12">
                <path d="M13,1A3.82,3.82,0,0,0,9.3,4.13,16.77,16.77,0,0,1,7.4,0H5.5V5A1.8,1.8,0,0,1,1.9,5V0H0V5A3.7,3.7,0,1,0,7.4,5V4.17A16.14,16.14,0,0,0,8.77,6.45L7.59,12H9.53l0.85-4A4.81,4.81,0,0,0,13,8.73a3.83,3.83,0,0,0,3.79-3.89A3.81,3.81,0,0,0,13,1Zm0,5.74a3.38,3.38,0,0,1-2.13-.85l0.19-.76v0c0.14-.81.57-2.18,2-2.18a1.9,1.9,0,0,1,1.9,1.9A2,2,0,0,1,13,6.78Z"/>
              </svg>
            ) : (
              <i className={"fa fa-" + type + " fa-stack-1x fa-inverse"}></i>
            )}
          </span>
        </a>
      </li>
    );
  }
}

export default Social;
