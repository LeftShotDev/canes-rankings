// import react library
import React, { Component } from 'react';

// import react-dom since I'm using a script tag on the html file.
import ReactDOM from 'react-dom';
import data from './data/players';

// import Rankings Component
import Rankings from './components/Rankings';

class App extends Component {
  render() {
    return <Rankings header="All-Time Carolina Hurricanes Rankings" players={data} />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
