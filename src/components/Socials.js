import React from 'react';
import Social from './Social.js';

class Socials extends React.Component {
  render() {
    return (
      <ul className="list-inline list-social-icons mb-0">
        {this.props.socials !== undefined && this.props.socials.map((social) =>
          <Social key={social.id}
                  type={social.type}
                  url={social.url} />
        )}
      </ul>
    );
  }
}

export default Socials;
