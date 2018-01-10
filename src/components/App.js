import React from 'react';
import Navigation from './Navigation.js';
import Content from './Content.js';

class App extends React.Component {
   render() {
      return (
  <div>
      <Navigation />
      <Content />
  </div>
      );
   }
}

export default App;
