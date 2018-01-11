import React from 'react';
import SKILLS from '../constants/Skills.js';

class Skill extends React.Component {
  render() {
    const type = SKILLS[this.props.type];
    return (
      <li className="list-inline-item">
        <i className={"devicons devicons-" + type}></i>
      </li>
    );
  }
}

export default Skill;
