import {Container, Button} from 'react-bootstrap';
import pictureLandingStartup from "../../assets/img/pictureLandingStartup.png";


function LandingBanner() {
    return (
        <Container style={{
            backgroundColor:'white',
            height:'700px',

        }}>
            <div class="row">
                <div class="col" style={{
                    marginTop:'70px',


                }}>
                    <h2 style={{
                        fontWeight:'bold',
                    }}>Ruhrv7sion - Dein Job schon heute</h2>
                    <br/>
                    <p style={{
                        hyphens: 'auto', 
                        textAlign: 'justify',
                    }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. 
                        
                    </p>
                    <br/>
                    <h4 style={{
                        fontWeight:'bold',
                    }}>Jetzt direkt suchen!</h4>
                    <Button style={{
                        fontWeight:'bold',
                    }} href="/jobs">
                        zu den Jobs geht es hier
                    </Button>
                    <br/>
                </div>
                <div class="col">
                    <img
                        src={pictureLandingStartup}
                        width="500px"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="Ruhrv7sion_logo"
                        style={{
                        margin:'10px',
                        marginTop:'50px',
                        marginLeft:'30px',
                        padding:'0px',
                        boxShadow: '10px 20px 15px gray',
                        borderRadius: '10px',
                    }}/>
                </div>
                
            </div>
        </Container>

    );
}

export default LandingBanner;