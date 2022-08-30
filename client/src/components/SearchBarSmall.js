import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import logoWhite from "../img/logo.png";
import SkylineCut from "../img/skylinecut.png";
import LandingStartup1 from "../img/LandingStartup1.jpg";


function SearchBarSmall() {
    return (
        <Container style={{
            width:'500px',
        }}>
            <Form>
                <Row className="align-items-center">
                    <Col >
                       
                        <Form.Control type="text" placeholder="Jobtitel, Stichwörter, Art" 
                        style={{
                            width:'300px',
                        }}/>
                        

                            
                    
                    </Col>
                    <Col >
                        <Button type="submit" style={{
                            marginLeft:'-60px',
                            backgroundColor:'#ff5b2b',
                        }}>
                            Job finden!
                        </Button>
                    </Col>


                </Row>
            </Form>
        </Container>

    );
}

export default SearchBarSmall;