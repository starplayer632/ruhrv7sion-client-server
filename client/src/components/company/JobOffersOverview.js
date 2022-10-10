import {Button, Container, Table, Row, Col, Form, ListGroup} from "react-bootstrap";
import "../../index.css";
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";


const ShowFunnel = () => {
    const [q, setQ]=  useState([]);
    const [active, setActive]=  useState([]);
    const [offline, setOffline]=  useState([]);
    const companyuser = Cookies.get('username');
    const navigate = useNavigate();
    const effectRan = useRef(false);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation(); 

    let offerlist;
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        if(effectRan.current === true){
            const getJobOffers = async () => {
                try {
                  const URL = '/safe/joboffers/user/'+companyuser;
                  const response = await axiosPrivate.get(URL, {
                      signal: controller.signal
                  });
                  offerlist = response.data;
                  console.log("offerlist: "+JSON.stringify(offerlist));
                  /*hilfe = funnel;
                  console.log("funnel: "+JSON.stringify(funnel));*/
                  //setFunnel1(funnel);
                  //setQ(funnel.questions);
                  //companyuser = funnel.companyuser;
                  for (let i = 0; i < offerlist.length; i++) {
                    if(offerlist[i].active===true){
                        setActive((active) => [...active, offerlist[i]]);
                    }else{
                        setOffline((offline) => [...offline, offerlist[i]]);
                    }
                  }
                  
                }catch (err) {
                  console.error(err);
                  //navigate('/business/login', { state: { from: location }, replace: true });
                }
            }
            
            getJobOffers();    
        }
        
        return () => {
            isMounted = false;
            effectRan.current = true;
            controller.abort();
        }
    }, [])
    
    function turnOffline(id){

    }
    function turnActive(id){

    }
    function turnSafeView(id){

    }
    function turnShowPublic(id){
        
    }
    function turnEdit(id){

    }
    function turnDelete(id){

    }


    /**
     * <Form.Check 
                    type="checkbox"
                    id="legalterms"
                    label="This field is required. Maybe for legal terms?"
                    required
                />
     */

/*
<h2>{funnel1.funnelname}</h2>
            <br/>
            <ListGroup>
            <Form style={{fontSize:"20px"}}>
                <ListGroup.Item>
                    <br/>
                    <Form.Group className="mb-3" style={{fontSize:"20px"}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        <br/>
                        <Form.Label>Name</Form.Label>
                        <Form.Control style={{fontSize:"20px"}} id="name" type="text" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                        Please enter your name.
                        </Form.Text>
                    </Form.Group>
                    <br/>
                </ListGroup.Item>
                {q.map((question, i) => 
                    question.type == "YesNo" ? (
                        <>
                            <ListGroup.Item>
                                <br/>
                                <ShowYesNo question={question.question} id={i} />
                                <br/>
                            </ListGroup.Item>
                        </>
                    ) : question.type == "open" ? (
                        <>
                            <ListGroup.Item>
                                <br/>
                                <ShowOpen question={question.question} id={i} />
                                <br/>
                            </ListGroup.Item>
                        </>
                    ) : question.type == "slider" ? (
                        <>
                            <ListGroup.Item>
                                <br/>
                                <ShowSlider question={question.question} id={i} min={question.min} max={question.max} />
                                <br/>
                            </ListGroup.Item>
                        </>
                    ) : (
                        <>ERROR Loading this question</>
                    )
                )}
                
                
            </Form>
            <ListGroup.Item>
                <Button style={{width:"100%"}} variant="primary" onClick={submitHandler}>
                        Submit
                </Button>
            </ListGroup.Item>
            </ListGroup>

*/



    return (
        <Container>
            <br/>
            <h2>Active</h2>
            {active?.length
                ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Last time updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {active.map((activelist) => 
                                <tr>
                                    <td>{activelist?._id}</td>
                                    <td>{activelist?.title}</td>
                                    <td>{activelist?.updatedat}</td>
                                    <td>
                                        <Button onClick={()=>turnOffline(activelist._id)} style={{marginRight:"20px"}}>Turn offline</Button>
                                        <Button onClick={()=>turnShowPublic(activelist._id)} style={{marginRight:"20px"}}>View</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                ) : <p>No joboffers to display</p>
            }
            <br/>
            <br/>
            <h2>Not active</h2>
            {offline?.length
                ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Last time updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offline.map((offlinelist) => 
                                <tr>
                                    <td>{offlinelist?._id}</td>
                                    <td>{offlinelist?.title}</td>
                                    <td>{offlinelist?.updatedat}</td>
                                    <td>
                                        <Button onClick={()=>turnActive(offlinelist._id)} style={{marginRight:"20px"}}>Turn active</Button>
                                        <Button onClick={()=>turnSafeView(offlinelist._id)} style={{marginRight:"20px"}}>Safe View</Button>
                                        <Button onClick={()=>turnEdit(offlinelist._id)} style={{marginRight:"20px"}}>Edit</Button>
                                        <Button onClick={()=>turnDelete(offlinelist._id)} style={{marginRight:"20px"}}>Delete</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                ) : <p>No Funnels to display</p>
            }
        </Container>
    );
};

export default ShowFunnel;