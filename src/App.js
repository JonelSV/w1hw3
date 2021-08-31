import React, { Component } from 'react';
import './App.css'
import DivOne from './DivOne';


class App extends Component {
 
  render() {
    // console.log(this.state.tardis)
    return (
      <div>
        <div>
          <DivOne />
        </div>
      </div>
    );
  }
}

export default App;
