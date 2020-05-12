import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import FAQs from "./pages/Faqs";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/login";
//import Register from "./pages/register";
//import Results from "./pages/results";
import Profile from "./pages/profile";
//import Nav from "./components/Nav";
import './App.css';
//import { render } from 'react-dom';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          {/* <Home></Home>
          <FAQs></FAQs> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/faqs" component={FAQs} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/results" component={Results} /> */}
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/register" component={Register} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

