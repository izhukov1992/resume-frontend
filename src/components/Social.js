import React from 'react';

class Social extends React.Component {
 render() {
   return (
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/izhukov1992" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
    );
  }
}

export default Social;
