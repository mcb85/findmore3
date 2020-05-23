import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav"
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
// import ResultsPage from './ResultsPage';
//import { withRouter } from "react-router";
//import Link from 'react-router'


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      title: "",
      redirect: null
      // books: [],
      // tvShows: [],
    };

  }

        
  
  search = (e) => {
    e.preventDefault();
    console.log("=============title: " + this.state.title);
    API.getMoviesCollectionsByTitle(this.state.title)
      .then(res => {
        console.log("========resulting data is: " + JSON.stringify(res.data));
        
        this.setState({ movies: res.data, redirect: "/results" })
        // console.log(this.state.movies);
        // console.log(this.state.movies[0].title1);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = (event) => {
    this.setState({ title: event.target.value });
  };


  render() {
    if (this.state.redirect) {
        console.log(this.state.movies);

      return <Redirect to={{
        pathname: "/results",
        state: { title: this.state.title, movies: this.state.movies }
      }
      } />
    }

    
    return (

      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <img className="rounded-5" src="icon.png" width="200" alt="logo"></img>
              <h1>FindMore</h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h3 className="d-flex justify-content-center">
                What would you like to find more of today?
              </h3>
              <Col size="md-12">
                <Col size="md-12">
              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Enter Title"
                />
                <br></br>
                <FormBtn disabled={!this.state.title} onClick={this.search}
                >
                  Search
                </FormBtn>

                </form></Col></Col>
              
            </Jumbotron>


          </Col>
        </Row>
      </Container>


    );

  }

};

export default Home;



