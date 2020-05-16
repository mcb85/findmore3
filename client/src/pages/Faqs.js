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
                        <h3 className="text">
                            Do I need an account to search titles?
                         </h3>
                        <p>Yes, you must register for an account prior to utilizing our website. </p>
                        <h3>How do I register for an account?</h3>
                        <p>Visit the register page to create login credentials. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default FAQs;