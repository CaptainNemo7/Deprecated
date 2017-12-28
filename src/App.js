import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
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
        </header>
        <h1>Welcome to my Nautilus!</h1>
        <Grid>
          <Row className="show-grid">
            <Col lg={4} ><Resume /></Col>
            <Col lg={8} ><h2>Applications:</h2><Projects /></Col>
          </Row>
        </Grid>   
      </div>
    );
  }
}

export default App;
