import React, { Component } from 'react';
import './App.css';
import Resume from './components/resume.jsx';
import Projects from './components/projects.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Carter Chavez</h1>
          <h2 className="App-description">Software Engineer</h2>
          <Resume />
        </header> 
        <h2>Projects:</h2>
        <Projects />      
      </div>
    );
  }
}

export default App;
