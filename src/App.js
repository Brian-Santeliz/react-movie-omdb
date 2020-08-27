import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
 

  return (
    <>
      <Router>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
          </Switch>
      </Router>
    </>
  );
}
export default App;
