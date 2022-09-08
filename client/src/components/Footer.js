import {Container, Button} from 'react-bootstrap';
import logoWhite from "../assets/img/logo.png";
import SkylineCut from "../assets/img/skylinecut.png";

function Footer() {
    return (
    <div>
        <img
            src={SkylineCut}
            width="600px"
            height="auto"
            className="d-inline-block align-top"
            alt="Ruhrv7sion_logo"
            style={{
            marginLeft:'0px',
            marginRight:'100%',
            marginTop:'-130px',
            position:'absolute',
            left:'1px',
        }}/>
        <div style={{
                    backgroundColor:'#010837',
            }}>
            <Container style={{
                    paddingTop:'20px',
                    backgroundColor:'#010837',
                    color:'white',
            }}>
                <div class="row">
                    <div class="col-sm" style={{
                        backgroundColor:'',
                        padding:'10px',
                    }}>
                        <img
                            src={logoWhite}
                            width="300px"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="Ruhrv7sion_logo"
                            style={{
                                marginBottom:'40px',
                        }}/>
                        <p>
                            Lorem Ipsum.
                        </p>
                    </div>
                    <div class="col-sm" style={{
                        backgroundColor:'',
                        padding:'10px',
                    }}>
                        <h3>Dein Traumjob</h3>
                        <p>
                            Wartet auf Dich. Und dank <br/>Ruhrv7sion-Matching kannst Du dir die  <br/> Bewerbung sparen.
                        </p>
                        <Button type="button" class="btn btn-outline-light">Leg Los!</Button>
                    </div>
                    <div class="col-sm" style={{
                        backgroundColor:'',
                        padding:'10px',
                    }}>
                        <h3>Dein Draht zu uns</h3>
                        <p>
                            Web: www.ruhrv7sion.de <br/>
                            Tel./Whatsapp: +49 177 4022647<br/>
                            E-Mail: kontakt@ruhrv7sion.de<br/>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm" style={{
                            backgroundColor:'',
                            padding:'10px',
                    }}> 
                        <h5>Datenschutz</h5>
                    </div>
                    <div class="col-sm" style={{
                            backgroundColor:'',
                            padding:'10px',
                    }}> 
                        <h5>Impressum</h5>
                    </div>
                </div>
                <div style={{
                    marginLeft:'0px',
                    marginRight:'100%',
                    position:'absolute',
                    width:'150px',
                    height:'150px',
                    marginTop:'-150px',
                    left:'0px',
                    backgroundColor:'#8cc6d7',
                    clipPath: 'polygon(0 0, 0% 100%, 60% 100%)',
                }}></div>

                <div style={{
                    marginLeft:'0px',
                    marginRight:'100%',
                    position:'absolute',
                    width:'100px',
                    height:'100px',
                    marginTop:'-100px',
                    left:'0px',
                    backgroundColor:'#ff5b2b',
                    clipPath: 'polygon(0 0, 0% 100%, 60% 100%)',
                }}></div>

                <div style={{
                    position:'absolute',
                    width:'50px',
                    height:'15px',
                    marginTop:'-15px',
                    right:'100px',
                    backgroundColor:'#ff5b2b',
                    
                }}></div>
                <div style={{
                    position:'absolute',
                    width:'50px',
                    height:'15px',
                    marginTop:'-15px',
                    right:'150px',
                    backgroundColor:'#8cc6d7',
                }}></div>
            </Container>
        </div>
        
        
    </div> 
    );
  }

export default Footer;