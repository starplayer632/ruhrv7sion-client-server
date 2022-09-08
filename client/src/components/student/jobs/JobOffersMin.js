import {Dropdown , Container, Button, Row, Col} from 'react-bootstrap';

function JobOffersMin(props) {
    return (

        <Container style={{
            width:'100%'
        }}>
            <hr />
            <Row>
                <h5><a href="">{props.title}</a></h5>
            </Row>
            <Row>
                <h6>{props.company}</h6>
            </Row>
            <Row>
                <Col>
                    <Row>
                        Time: {props.time}h a week
                    </Row>
                    <Row>
                        Money: {props.money}€ a hour
                    </Row>
                </Col>
                <Col>
                    <p>
                        City: {props.city}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default JobOffersMin;