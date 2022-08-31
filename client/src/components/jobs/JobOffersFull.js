import {Dropdown , Container, Button, Row, Col} from 'react-bootstrap';
import React from 'react'

function JobOffersFull(props) {
    return (

        <Container style={{
            width:'100%'
        }}>
            <Row>
                <h2>{props.title}</h2>
            </Row>
            <br/>
            <Row>
                <h4>Most important facts</h4>
                <p>
                    Fact1
                </p>
                <p>
                    Fact2
                </p>
                <p>
                    Fact3
                </p>
            </Row>
            <br/>
            <Row>
                <h4>So stellen wir uns die Zusammenarbeit vor:</h4>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </Row>
            <br/>
            <Row>
                <h4>Das solltest du mitbringen:</h4>
                <p>
                    Fact1
                </p>
                <p>
                    Fact2
                </p>
                <p>
                    Fact3
                </p>
            </Row>
            <br/>
            <Row>
                <Col>
                    <h5>Time: h a week</h5>
                </Col>
                <Col>
                    <h5>Money: € a hour</h5>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <h5>Company Data: Leato GmbH</h5>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Button>Lets Match!</Button>
                </Col>
                <Col>
                    <Button>More from Leato GmbH</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default JobOffersFull;