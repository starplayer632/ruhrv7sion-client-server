import {Dropdown , Container, Button, Row, Col} from 'react-bootstrap';




function JobsSearchBar() {


    return (
        <Container style={{
            width:'100%',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',

        }}>
            <Row className="justify-content-md-center" style={{
            width:'100%',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
        }}>
                <Col xs lg="2">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Job category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Engineer</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">IT</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Consulting</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Management</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Finance</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Marketing</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs lg="2">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Type of employment
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Werkstudent</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Praktikum</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Minijob</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Abschlussarbeit</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs lg="2">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Type of employment
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Werkstudent</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Praktikum</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Minijob</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Abschlussarbeit</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs lg="2">
                    <Button variant="primary">Search</Button>{' '}
                </Col>
            </Row>
        </Container>
    );
}

export default JobsSearchBar;