import {Button, Container, Row, Col, Form, ListGroup} from "react-bootstrap";
import "../../index.css";
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import ShowYesNo from "./showfunnel/ShowYesNo";
import ShowOpen from "./showfunnel/ShowOpen";
import ShowSlider from "./showfunnel/ShowSlider";

const ShowFunnelPublic = () => {
    const [funnel1, setFunnel1]=  useState([]);
    const [q, setQ]=  useState([]);
    const [hasAccount, setHasAccount]=  useState(false);
    const navigate = useNavigate();
    const effectRan = useRef(false);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation(); 
    const funnelid = ((document.URL).split("/"))[4];
    const [active2, setActive2]=  useState(false);
    let funnel;
    
    useEffect(() => {
        let isMounted = true;
        let active = false;
        const controller = new AbortController();
        if(effectRan.current === true){
            const getFunnelActiv = async () => {
                try {
                  const URL = '/openfunnels/'+funnelid;
                  const response = await axiosPrivate.get(URL, {
                      signal: controller.signal
                  });
                  console.log("re: "+response.data.status);
                  const re = response.data.status;
                  if(re === "active"){
                    active = true;
                    setActive2(true);
                  }else{
                    active = false;
                  }
                }catch (err) {
                  console.error(err);
                }
            }

            const getFunnel = async () => {
                try {
                  const URL = '/funnels/'+funnelid;
                  const response = await axiosPrivate.get(URL, {
                      signal: controller.signal
                  });
                  funnel = response.data;
                  setFunnel1(funnel);
                  setQ(funnel.questions);
                }catch (err) {
                  console.error(err);
                }
            }
            getFunnelActiv();

            const timer = setTimeout(() => {
                console.log('This will run after 0.5 second!')
                console.log("active: "+active);
                if(active===true){
                    getFunnel();
                    console.log("ACTIVE");
                }else{
                    navigate("/");
                    console.log("OFFLINE");
                }
              }, 500);
            return () => clearTimeout(timer);

            
           
                
        }
        
        return () => {
            isMounted = false;
            effectRan.current = true;
            controller.abort();
        }
    }, [])

    
    async function submitHandler(){
        let answers = [];
        for (let i = 0; i < q.length; i++) {
            if (q[i].type==="YesNo") {
                let value = null;
                const idyes = i+"yes";
                const idno = i+"no";
                if(document.getElementById(idyes).checked === true){
                    value = "yes";
                }else if (document.getElementById(idno).checked === true){
                    value = "no";
                }
                answers[i]={
                    "type": q[i].type, 
                    "value": value,
                    "points": []
                };
            }else if(q[i].type==="slider"){
                answers[i]={
                    "type":"slider", 
                    "value" : document.getElementById(i).value,
                    "points":[]
                };
            }else if(q[i].type==="open"){
                answers[i]={
                    "type":"open", 
                    "value":document.getElementById(i).value,
                    "points":[]
                };
            }  
            
        }
        
        const controller = new AbortController();
        try {
            let response;
            if(hasAccount===false){
                const funnelname = funnel1.funnelname;
                const companyuser = funnel1.companyuser;
                const email =  document.getElementById("email").value;
                const name =  document.getElementById("name").value;
                const questions = q;
                response = await axiosPrivate.post('/funnels/done', 
                    JSON.stringify({email, name, funnelid, companyuser, funnelname, answers, questions  }),{
                    signal: controller.signal
                });
            }else if(hasAccount===true){
                const funnelname = funnel1.funnelname;
                const companyuser = funnel1.companyuser;
                const username =  document.getElementById("username").value;
                const questions = q;
                response = await axiosPrivate.post('/funnels/doneWithUsername', 
                    JSON.stringify({username, funnelid, companyuser, funnelname, answers, questions  }),{
                    signal: controller.signal
                });
            }

            
            console.log("new response.data.status: "+response.data.status);
            if(response?.data?.status==="ok"){
                alert("Funnel saved!");
                navigate("/");
            }
        } catch (err) {
            console.error(err);
        }

        return () => {
            controller.abort();
        }
    }

    function changeAccount(){
        if(hasAccount === true){
            document.getElementById("username").disabled = true;
            document.getElementById("noaccform").disabled = false;
            document.getElementById("name").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("accButton").innerHTML = "Use username instead";
            setHasAccount(false);
        }else{
            document.getElementById("username").disabled = false;
            document.getElementById("noaccform").disabled = true;
            document.getElementById("name").disabled = true;
            document.getElementById("email").disabled = true;
            document.getElementById("accButton").innerHTML = "Use form instead";
            setHasAccount(true);
        }
    }

    /**
     * <Form.Check 
                    type="checkbox"
                    id="legalterms"
                    label="This field is required. Maybe for legal terms?"
                    required
                />
     */

    
    

    return (
        <Container>
            <h1 style={{
                textAlign:"center",
                color:"#ff5b2b"
            }}>{funnel1.funnelname}</h1>
            <br/>
            <div style={{
                padding:"20px",
                borderRadius: "15px",
                backgroundColor:"white",
                boxShadow: "rgb(60 66 87 / 12%) 0px 7px 14px 0px, rgb(0 0 0 / 12%) 0px 3px 6px 0px"
            }}>
            <Form style={{
                fontSize:"20px", 
                width: "100%"
            }}>
                {q.map((question, i) => 
                    question.type == "YesNo" ? (
                        <>
                            <br/>
                            <h6 sytle={{
                                width:"100%",
                                textAlign: "right",
                                marginBottom: "0px"
                            }}>
                                Yes-No-Question
                            </h6>
                            <div style={{
                                width:"300px",
                            }}>
                                <hr/>
                            </div>
                            <ShowYesNo question={question.question} id={i} />
                        </>
                    ) : question.type == "open" ? (
                        <>
                            <br/>
                            <h6 sytle={{
                                width:"100%",
                                textAlign: "right",
                                marginBottom: "0px"
                            }}>
                                Open-Question
                            </h6>
                            <div style={{
                                width:"300px",
                            }}>
                                <hr/>
                            </div>
                            <ShowOpen question={question.question} id={i} />
                        </>
                    ) : question.type == "slider" ? (
                        <>
                            <br/>
                            <h6 sytle={{
                                width:"100%",
                                textAlign: "right",
                                marginBottom: "0px"
                            }}>
                                Slider-Question
                            </h6>
                            <div style={{
                                width:"300px",
                            }}>
                                <hr/>
                            </div>
                            <ShowSlider question={question.question} id={i} min={question.min} max={question.max} />
                        </>
                    ) : (
                        <>ERROR Loading this question</>
                    )
                )}
            </Form>
                
            <br/>
            <br/>
            <br/>
            <Container>
                <h6>
                    Personal info
                </h6>
                <div style={{
                    width:"300px"
                }}>
                    <hr/>
                </div>
                <h4 style={{
                    width: "100%",
                    textAlign: "center"
                }}>
                    Do you already have an account?
                </h4>
                <br/>
                <Row>
                    <Col>                        
                   
                    </Col>
                    <Col>
                        <Button id="accButton" onClick={changeAccount} style={{
                            width: "100%"
                        }}>Activate Username field</Button>
                    </Col>
                    <Col>
                        <Form.Control id="username" type="text" placeholder="Enter your username" style={{
                            width:"100%"
                        }} disabled/>
                    </Col>
                    <Col>                        
                        
                    </Col>
                </Row>
                <br/>
                <Row style={{
                    width: "100%",
                    textAlign: "center"
                }}>
                    <h4>Or use the form</h4>
                </Row>

                        
                    
                <br/>
                <Form.Group id="noaccform" className="mb-3" style={{fontSize:"20px"}}>
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
            </Container>
            <br/>
            <Button style={{width:"100%"}} variant="primary" onClick={submitHandler}>
                    Submit
            </Button>
            
            </div>
        </Container>
    );

    
};

export default ShowFunnelPublic;