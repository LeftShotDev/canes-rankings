// import react library
import React, {Component,} from 'react';

// import react-dom since I'm using a script tag on the html file.
import ReactDOM from 'react-dom';

// import Rankings Component
import Rankings from './components/Rankings';

class App extends Component {
  render() {
    return (<Rankings />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
