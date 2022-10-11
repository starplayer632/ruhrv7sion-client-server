import {Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import axi from '../../../api/axios';
import React, { useRef, useState, useEffect } from 'react';
import ShowFunnel from '../../funnels/ShowFunnel';
import { Navigate, useNavigate } from 'react-router-dom';


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
                document.getElementById("jobsBigTimeweekly").innerHTML = rawList[i].timeweekly;
                document.getElementById("jobsBigMoney").innerHTML = rawList[i].money;
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
            maxHeight: '1100px'
        }}>
            <Row style={{
                width:'100%',
            }}>
                <Col xs={6} style={{
                    borderRight:'3px solid gray',
                    overflow: 'scroll',
                    maxHeight: '1000px',
                }}>
                    {rawList.map(job => (
                        <>
                           <hr />
                           <Row>
                            <h5><Button onClick={() => showBig(job._id)}>{job.title}</Button></h5>
                            </Row>
                            <Row>
                                <h6>{job.companyname}</h6>
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                        Time: {job.timeweekly}h a week
                                    </Row>
                                    <Row>
                                        Money: {job.money}€ a hour
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        City: {job.city}
                                    </Row>
                                    <Row>
                                        Type: {job.type}
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
                                <ListGroup.Item><div id="jobsBigTimeweekly">Null</div> h a week</ListGroup.Item>
                                <ListGroup.Item><div id="jobsBigMoney">Null</div> € a hour</ListGroup.Item>
                                <ListGroup.Item>Companyname: <div id="jobsBigCompanyname">Null</div></ListGroup.Item>
                                <ListGroup.Item>City: <div id="jobsBigCity">Null</div></ListGroup.Item>

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


                         