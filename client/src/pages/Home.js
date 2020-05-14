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
      API.getMovieCollections()
        .then(res =>
          this.setState({ movies: res.data })
        )
        .catch(err => console.log(err));
    }

    else if (this.state.dropdownValue === "books") {
      API.getBookCollections()
        .then(res =>
          this.setState({ books: res.data })
        )
        .catch(err => console.log(err));
    } else {
      API.getTvShowCollections()
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
            <Jumbotron class="bg-white">
              <h1>FindMore</h1>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Jumbotron class="bg-white">
              <h3 className="d-flex justify-content start">
                What would you like to find more of today?
              </h3>
              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Enter Title"
                />

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



