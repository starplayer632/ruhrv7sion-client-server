import {Button, Container, Row, Col, Form} from "react-bootstrap";
import "../../index.css";
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import ShowYesNo from "./showfunnel/ShowYesNo";
import ShowOpen from "./showfunnel/ShowOpen";
import ShowSlider from "./showfunnel/ShowSlider";

const ShowFunnel = () => {
    const [funnel1, setFunnel1]=  useState([]);
    const [q, setQ]=  useState([]);
    const companyuser = Cookies.get('username');
    const navigate = useNavigate();
    const effectRan = useRef(false);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation(); 
    const funnelid = ((document.URL).split("/"))[5];
    let hilfe;
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        let funnel;
        if(effectRan.current === true){
            const getFunnel = async () => {
                try {
                  const URL = '/funnels/'+funnelid;
                  const response = await axiosPrivate.get(URL, {
                      signal: controller.signal
                  });
                  funnel = response.data;
                  hilfe = funnel;
                  console.log("funnel: "+JSON.stringify(funnel));
                  setFunnel1(funnel);
                  setQ(funnel.questions);
                }catch (err) {
                  console.error(err);
                  navigate('/business/login', { state: { from: location }, replace: true });
                }
            }
            
            getFunnel();    
        }
        
        return () => {
            isMounted = false;
            effectRan.current = true;
            controller.abort();
        }
    }, [])

    
    async function submitHandler(){
        let answers = [];
        console.log("q.length: "+q.length);
        for (let i = 0; i < funnel1.length; i++) {
            //const id= JSON.stringify(funnel1[i].id)+"question";
            if (q[i].type==="YesNo") {
                let value = null;
                const idyes = i+"yes";
                const idno = i+"no";
                if(document.getElementById(idyes).value === true){
                    value = "yes";
                }else if (document.getElementById(idno).value === true){
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
        console.log("answers 0: "+JSON.stringify(answers));
        /*
        const controller = new AbortController();
        try {
            const _id = funnelid;
            const funnelname = document.getElementById("funnelname").value;
            const response = await axiosPrivate.put('/funnels', 
                JSON.stringify({_id, companyuser, funnelname, questions }),{
                signal: controller.signal
            });
            console.log("new response.data.status: "+response.data.status);
            if(response?.data?.status==="ok"){
                alert("Funnel saved!");
                navigate("/business/funnels");
            }
        } catch (err) {
            console.error(err);
            navigate('/business/login', { state: { from: location }, replace: true });
        }

        return () => {
            controller.abort();
        }*/
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
            <h3>funnelid: {funnelid}</h3>
            <br/>
            <Form>
                {q.map((question, i) => 
                    question.type == "YesNo" ? (
                        <>
                            <ShowYesNo question={question.question} id={i} />
                            <br/>
                        </>
                    ) : question.type == "open" ? (
                        <>
                            <ShowOpen question={question.question} id={i} />
                            <br/>
                        </>
                    ) : question.type == "slider" ? (
                        <>
                            <ShowSlider question={question.question} id={i} min={question.min} max={question.max} />
                            <br/>
                        </>
                    ) : (
                        <>ERROR Loading this question</>
                    )
                )}
                
                
            </Form>
            <Button variant="primary" onClick={submitHandler}>
                    Submit
            </Button>
        </Container>
    );
};

export default ShowFunnel;