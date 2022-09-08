import {Container, Button} from 'react-bootstrap';
import pictureLandingStartup from "../../assets/img/pictureLandingStartup.png";
import SearchBarSmall from "./SearchBarSmall.js";


function LandingBanner() {
    return (
        <Container style={{
            backgroundColor:'#f5f5f5',
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
                    <SearchBarSmall/>
                    <br/>
                    <p>
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#Werkstudent</a> &nbsp; 
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#IT</a> &nbsp; 
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#HomeOffice</a> &nbsp; 
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#MiniJob</a> &nbsp; 
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#Büro</a> &nbsp;
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#Benefits</a> &nbsp;  
                        <br/>
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#Dortmund</a> &nbsp; 
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#Oberhausen</a> &nbsp; 
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#Mülheim an der Ruhr</a> &nbsp;
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#Duisburg</a> &nbsp;
                        <a href='' style={{ color:'#666666', textDecoration: 'none',}}>#Essen</a> &nbsp;
                    </p>
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