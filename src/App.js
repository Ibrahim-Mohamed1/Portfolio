import React from 'react';
import { Switch, Route} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Projects from "./Projects"
import Resume from "./Resume"
import Footer from "./Footer"
import "./app.css"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;