import React from 'react';
import Navigation from './Navigation.js';
import Content from './Content.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {profile: {}};
  }

  componentWillMount() {
    fetch('/api/v1/account/1/')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({profile: json});
      });
  }

  render() {
    return (
      <div>
        <Navigation userpic={this.state.profile.userpic} />
        <Content profile={this.state.profile} />
      </div>
    );
  }

}

export default App;
