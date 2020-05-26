import React from "react";
import Jumbotron2 from "../components/Jumbotron2";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";


 


function FAQs() {
    return (
        <div>
            <Nav />
            
                <Jumbotron2>
                <h1 className="text-warning">FAQS</h1>
                <h3 className="text-warning"> Got Questions? We've got Answers!</h3>
                </Jumbotron2>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h3>What is FindMore? </h3>
                        <p>Findmore allows you to input the title of a movie you enjoy and find collections of movie titles that are similar and you are likely to enjoy as well. 
                        Collections are user created, so the possibilities are endless on how many different collections/combinations will be returned. Similarities are determined by users.
                        Collections are also rated by users, to help guide your collection choosing. 
</p>
                        <h3 className="text">
                            Do I need an account to search titles?
                         </h3>
                        <p>Yes, you must register for an account prior to utilizing our website. </p>
                        <h3>How do I register for an account?</h3>
                        <p>Click on "Don't have an account? Sign up" from the login page to create login credentials. </p>
                        <h3 className="text">
                            How do I create a collection?
                         </h3>
                        <p>Go the Collections tab and click on Create a Collection. You must enter a minimum of 3 movie titles. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default FAQs;