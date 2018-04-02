import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

ReactDOM.render(
    <Router>
        <div>
        <Route name="Home" exact path="/" component={App} />
        <Route name="About" exact path="/About" component={About} />
        <Route name="Skills" exact path="/Skills" component={Skills} />
        <Route name="Projects" exact path="/Projects" component={Projects} />
        <Route name="Contact" exact path="/Contact" component={Contact} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
