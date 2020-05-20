import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import FAQs from "./pages/Faqs";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/login";
import Register from "./pages/register";
import ResultsPage from "./pages/ResultsPage";
import Profile from "./pages/profile";
import './App.css';
//import { render } from 'react-dom';
//import isAuthenticated from "./config/auth";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} isAuthenticated/>
          <Route exact path="/home" component={Home} isAuthenticated />
          <Route exact path="/faqs" component={FAQs} />
          <Route exact path="/profile" component={Profile} isAuthenticated />
          <Route exact path="/results" component={ResultsPage} isAuthenticated />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

