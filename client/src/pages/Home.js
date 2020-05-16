import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav"
import { Redirect } from 'react-router-dom';



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      books: [],
      tvShows: [],
      search: "",
      dropdownValue: "",
    };
  }

  search = () => {
    if (this.state.dropdownValue === "movies") {
      API.getMoviesCollectionsByTitle()
        .then(res =>
          this.setState({ movies: res.data })
        )
        .catch(err => console.log(err));
    }

    else if (this.state.dropdownValue === "books") {
      API.getBookCollectionsByTitle()
        .then(res =>
          this.setState({ books: res.data })
        )
        .catch(err => console.log(err));
    } else {
      API.getShowsCollectionsByTitle()
        .then(res =>
          this.setState({ tvShows: res.data })
        )
        .catch(err => console.log(err));
    }
    return <Redirect to="/results/" />
  };


  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <img className="rounded-5" src="icon.png" width= "200" alt="logo"></img>
              <h1>FindMore</h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h3 className="d-flex justify-content-center">
                What would you like to find more of today?
              </h3>
              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Enter Title"
                />
              <br></br>
                <FormBtn disabled={!this.state.search} onClick={this.search}>
                  Search
                </FormBtn>
              </form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }

};

export default Home;



