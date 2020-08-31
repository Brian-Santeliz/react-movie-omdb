import React from "react";
// import Home from "./components/Home";
import Header from "./components/Header";
import  About  from "./pages/About";
import  NotFound  from "./pages/NotFound";
import  Home  from "./pages/Home";
// import About from "./components/About";
// import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="Search Movie DB" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/:id" component={About} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}
export default App;
