import {Container, Form, Button, Row, Col} from 'react-bootstrap';


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