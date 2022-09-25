import {Container, Navbar, Nav, Button, NavDropdown} from 'react-bootstrap';
import logoWhite from "../../assets/img/logo.png";
import iconLoginW from "../../assets/img/iconLoginW.png";

const Header_Student = () => {
    return (
      <Navbar sticky="top" expand="lg" variant="light" style={{
        backgroundColor: '#010837',
        color:'white',
      }}>
        <Container>

          <Navbar.Brand href="/">
          <div class="d-flex flex-row"style={{
                  position:'absolute',
                  left:'0px',
                  top:'0px',
              }}>
              <div class="p-2" style={{
                  paddingLeft:'0px',
                  paddingLeft:'100%', 
                  paddingTop:'10px',
                  paddingBottom:'5px',
                  backgroundColor: '#ff5b2b',
              }}>
                <img
                  src={logoWhite}
                  width="auto"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Ruhrv7sion_logo"
                  style={{
                    paddingLeft:'200px',
                    paddingRight:'50px',
                    
                }}
                />
              </div>
              <div class="p-2" style={{
                  padding:'5px', 
                  paddingLeft:'10px', 
                  paddingRight:'100px', 
                  paddingBottom:'5px', 
                  marginTop:'-13px',
                  backgroundColor: '#ff5b2b',
                  width:'40px',
                  transform: 'skewX(-20deg)',
                  marginLeft:'-20px',
                  overflow:'hidden',
                  boxSizing: 'border-box',
                  borderRadius:'0px 0px 10px 0px',
                  zIndex:'2',
              }}>
              </div>
              <div class="p-2" style={{
                  padding:'5px', 
                  paddingLeft:'10px', 
                  paddingRight:'100px', 
                  paddingBottom:'5px', 
                  marginTop:'-13px',
                  backgroundColor: '#8cc6d7',
                  width:'30px',
                  transform: 'skewX(-20deg)',
                  marginLeft:'-10px',
                  overflow:'hidden',
                  boxSizing: 'border-box',
                  borderRadius:'0px 0px 10px 0px',
                  zIndex:'1',
              }}>
              </div>
              <div class="p-2" style={{
                  padding:'5px', 
                  paddingLeft:'0px', 
                  paddingRight:'0px', 
                  paddingBottom:'0px',
                  backgroundColor: '#ff5b2b',
                  width:'200px',
                  marginLeft:'-600px',
                  overflow:'hidden',
                  zIndex:'1',
              }}>
              </div>
          </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" style={{color:'white', width:'50px'}}></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/jobs" style={{color:'white'}}>Jobs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" style={{color:'white', width:'50px'}}></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/zukunftsregister" eventKey="link-1" style={{color:'white'}}>Zukunftsregister</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" style={{color:'white', width:'50px'}}></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <div class="d-flex flex-row"> 
                  <div class="p-2">
                      <img
                          src={iconLoginW}
                          width="auto"
                          height="25"
                          className="d-inline-block align-top"
                          alt="Login_icon"
                          style={{
                            
                        }}/>
                  </div>
                  
                    <Nav.Link href="/login/home" eventKey="link-2" style={{color:'white'}}>Login</Nav.Link>
                  
                </div>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" style={{color:'white', width:'50px'}}></Nav.Link>
              </Nav.Item>

              {/**<Nav.Item>
                <Nav.Link eventKey="disabled" disabled style={{color:'white'}}>
                  Disabled
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" id="nav-dropdown" style={{color:'white'}}>
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
              </NavDropdown>*/}
              <Nav.Item>
                <Button href="/business/" style={{
                  backgroundColor:'#ff5b2b',
                  borderRadius: '15px 0px 0px 15px',
                  padding:'10px',
                  width:'200px',
                  position:'absolute',

                }}>For Company Users</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header_Student;