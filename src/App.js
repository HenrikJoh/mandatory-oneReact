import React, { Component } from 'react';
import Additem from './List';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React Todo</h1>
          </header>
          <div className="App-intro">
            <Additem />
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
