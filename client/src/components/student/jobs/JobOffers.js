import {Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import axi from '../../../api/axios';
import React, { useRef, useState, useEffect } from 'react';
import ShowFunnel from '../../funnels/ShowFunnel';
import { Navigate, useNavigate } from 'react-router-dom';
//Import icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEuroSign, faCity, faPaperPlane, faIndustry  } from '@fortawesome/free-solid-svg-icons'


const JobOffers = () => {
    const [rawList, setRawList] = useState([]);
    const [funnelid, setFunnelid] = useState();
    const ref = useRef(null);
    const navigate = useNavigate();
    const [URL, setURL] = useState();

    let firstload = true;
    useEffect(() => {
        if (!firstload){
            console.log("useEffect []: ");
            axi.get('/joboffers').then(response => {
                const d = response.data;
                setRawList(d);
            }); 
        }else{
            firstload=false;
        }
      
    }, [])

    function showBig(id){
        //console.log("clicked: "+id);
        document.getElementById("jobBigContainer").style.visibility = "visible";
        for (let i = 0; i < rawList.length; i++) {
            if (rawList[i]._id === id){
                document.getElementById("jobsBigTitle").innerHTML = rawList[i].title;
                document.getElementById("jobsBigTextworktogether").innerHTML = rawList[i].textworktogether;
                document.getElementById("jobsBigTextexpectations").innerHTML = rawList[i].textexpectations;
                document.getElementById("jobsBigTimeweekly").innerHTML = rawList[i].timeweekly+" h a week";
                document.getElementById("jobsBigMoney").innerHTML = rawList[i].money+" € a hour";
                document.getElementById("jobsBigCompanyname").innerHTML = rawList[i].companyname;
                document.getElementById("jobsBigCity").innerHTML = rawList[i].city;
                setFunnelid(rawList[i].funnelstodisplay);
                setURL("/funnels/"+rawList[i].funnelstodisplay);
            }
        }
    }
    
    function gotoFunnel(){
        const URL = "/funnels/"+funnelid;
        //navigate(URL);
        console.log(URL);
    }

    return (
        <Container style={{
            width:'100%',
            maxHeight: '1200px'
        }}>
            <h3 style={{
                textAlign:"center"
            }}>The SearchBar is temporarily disabled!</h3>
            <br/>
            <Row style={{
                width:'100%',
            }}>
                <Col xs={5} style={{
                    
                    overflowY: 'scroll',
                    maxHeight: '1000px',
                }}>
                    {rawList.map(job => (
                        <>
                           <hr />
                           <Row>
                            <h5><Button onClick={() => showBig(job._id)}>{job.title}</Button></h5>
                            </Row>
                            <Row>
                                <h6>
                                    <FontAwesomeIcon icon={faIndustry} style={{
                                        margin:"0px",
                                        marginRight:"10px",
                                        width:"20px"
                                    }}/>
                                    {job.companyname}
                                </h6>
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col>
                                            <FontAwesomeIcon icon={faClock} style={{
                                                margin:"0px",
                                                marginRight:"10px",
                                                width:"20px"
                                            }}/>
                                            {job.timeweekly}h a week
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FontAwesomeIcon icon={faEuroSign} style={{
                                                margin:"0px",
                                                marginRight:"10px",
                                                width:"20px"
                                            }}/>
                                            {job.money}€ a hour
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <FontAwesomeIcon icon={faCity} style={{
                                                margin:"0px",
                                                marginRight:"10px",
                                                width:"20px"
                                            }}/>
                                            {job.city}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FontAwesomeIcon icon={faPaperPlane} style={{
                                                margin:"0px",
                                                marginRight:"10px",
                                                width:"20px"
                                            }}/>
                                            {job.type}
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                        

                    ))}
                </Col>
                <Col style={{
                    //border:'3px solid red',
                    padding:'20px',
                }}>   
                    <Container id="jobBigContainer" style={{
                        width:'100%',
                        visibility:'hidden'
                    }}>
                        <Row>
                            <h2 id="jobsBigTitle">Null</h2>
                        </Row>
                        <br/>
                        <Row>
                            <h4>This is how we imagine the cooperation:</h4>
                            <p id="jobsBigTextworktogether">Null</p>
                        </Row>
                        <br/>
                        <Row>
                            <h4>What you should bring:</h4>
                            <p id="jobsBigTextexpectations">Null</p>
                        </Row>
                        <br/>
                        <Row>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs lg="1">
                                            <FontAwesomeIcon icon={faClock} style={{
                                                margin:"0px",
                                                marginRight:"10px",
                                                width:"20px"
                                            }}/>
                                        </Col>
                                        <Col md="auto">
                                            <div id="jobsBigTimeweekly">Null h a week</div> 
                                        </Col>                                        
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs lg="1">
                                            <FontAwesomeIcon icon={faEuroSign} style={{
                                                margin:"0px",
                                                marginRight:"10px",
                                                width:"20px"
                                            }}/>
                                        </Col>
                                        <Col md="auto">
                                            <div id="jobsBigMoney">Null € a hour</div> 
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs lg="1">
                                            <FontAwesomeIcon icon={faIndustry} style={{
                                                margin:"0px",
                                                marginRight:"10px",
                                                width:"20px"
                                            }}/>
                                        </Col>
                                        <Col md="auto">
                                            <div id="jobsBigCompanyname">Null</div> 
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs lg="1">
                                            <FontAwesomeIcon icon={faCity} style={{
                                                margin:"0px",
                                                marginRight:"10px",
                                                width:"20px"
                                            }}/>
                                        </Col>
                                        <Col md="auto">
                                            <div id="jobsBigCity">Null</div> 
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                            </ListGroup>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Button id="funnelmatch" href={URL}>Lets Match!</Button>
                            </Col>
                            <Col>
                                <Button>More from the company</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <br/>
            <br/>
            <div>
                
            </div>
    </Container>
    );
}

export default JobOffers;


                         