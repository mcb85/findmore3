import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";


 const bgImage = '../../public/images/faq.jpg';

//Image by Arek Socha from Pixabay
function FAQs() {
    return (
        <div>
            <Nav />
            
                <Jumbotron style={{backgroundImage: `url('${bgImage}')`}}>
                <h1>FAQS</h1>
                <h3> Got Questions? We've got Answers!</h3>
                </Jumbotron>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h3>
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