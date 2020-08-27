import React from "react";
import Home from "./components/Home";
// import Header from "./components/Header";
import About from "./components/About";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
 

  return (
    <>
      <Router>
      {/* <Header title="Search Movie DB" /> */}
        
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about/:id' component={About}/>
          </Switch>
      </Router>
    </>
  );
}
export default App;
