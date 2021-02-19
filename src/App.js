import React from 'react';
import {BrowserRouter as Router, 
        Switch, 
        Route} from 'react-router-dom'
import Header from "./component/general/header.js"
import Main from "./component/home/main"
import About from "./component/home/about"
import Portfolio from "./component/home/portfolio"
import Skills from "./component/home/skills"
import Contact from "./component/home/contact"



function App() {
  return (
    <Router>
      <div className='App'>
      <Header/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
     </div>
    </Router>
    
  );
}

export default App;
