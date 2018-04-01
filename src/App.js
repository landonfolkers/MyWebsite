import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route name="Home" exact path="/" component={App} />
            <Route name="About" exact path="/About" component={About} />
            <Route name="Skills" exact path="/Skills" component={Skills} />
            <Route name="Projects" exact path="/Projects" component={Projects} />
            <Route name="Contact" exact path="/Contact" component={Contact} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
