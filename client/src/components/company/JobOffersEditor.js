import {Button, Container, Table, Row, Col, Form, ListGroup} from "react-bootstrap";
import "../../index.css";
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";


const JobOffersEditor = () => {
    const [joboffer, setJoboffer]=  useState([]);

    const [companyname, setCompanyname]= useState();
    const [type, setType]= useState();
    const [title, setTitle]= useState();
    const [city, setCity]= useState();
    const [timeweekly, setTimeweekly]= useState();
    const [money, setMoney]= useState();
    const [textworktogether, setTextworktogether]= useState();
    const [textexpectations, setTextexpectations]= useState();
    const [funnelstodisplay, setFunnelstodisplay]= useState();

    const companyuser = Cookies.get('username');
    const navigate = useNavigate();
    const effectRan = useRef(false);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation(); 
    const jobofferid = ((document.URL).split("/"))[6];
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        let jobs;
        if(effectRan.current === true){
            const getJobOffers = async () => {
                try {
                    //const URL = '/safe/joboffers/user/'+companyuser;
                    const URL = '/safe/joboffers/offer/'+jobofferid;
                    const response = await axiosPrivate.get(URL, {
                        signal: controller.signal
                    });
                    jobs = response.data;
                    console.log("jobs: "+JSON.stringify(jobs));
                    setJoboffer(jobs);
                    setCompanyname(jobs.companyname);
                    setType(jobs.type);
                    setTitle(jobs.title);
                    setCity(jobs.city);
                    setTimeweekly(jobs.timeweekly);
                    setMoney(jobs.money);
                    setTextworktogether(jobs.textworktogether);
                    setTextexpectations(jobs.textexpectations);
                    setFunnelstodisplay(jobs.funnelstodisplay);
                    document.getElementById("title").value=jobs.title;
                    document.getElementById("companyname").value=jobs.companyname;
                    document.getElementById("type").value=jobs.type;
                    document.getElementById("city").value=jobs.city;
                    document.getElementById("timeweekly").value=jobs.timeweekly;
                    document.getElementById("money").value=jobs.money;
                    document.getElementById("textworktogether").value=jobs.textworktogether;
                    document.getElementById("textexpectations").value=jobs.textexpectations;
                    document.getElementById("funnelstodisplay").value=jobs.funnelstodisplay;
                }catch (err) {
                  console.error(err);
                  navigate('/business/login', { state: { from: location }, replace: true });
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
    
    async function submitHandler(){
        let data = joboffer;
        data.companyname = companyname;
        data.active = false;
        data.type = type;
        data.title = title;
        data.city = city;
        data.timeweekly = timeweekly;
        data.money = money;
        data.textworktogether = textworktogether;
        data.textexpectations = textexpectations;
        data.funnelstodisplay = funnelstodisplay;
                
        

        const controller = new AbortController();
        try {
            const active = false;
            const URL = '/safe/joboffers/offer/'+jobofferid;
            const response = await axiosPrivate.put(URL, 
                JSON.stringify({ data }),{
                signal: controller.signal
            });
            console.log("new response.data.status: "+response.data.status);
            if(response?.data?.status==="ok"){
                alert("Joboffer saved!");
                navigate("/business/jobs");
            }
        } catch (err) {
            console.error(err);
            navigate('/business/login', { state: { from: location }, replace: true });
        }

        return () => {
        controller.abort();
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
            <Form>
                <Form.Group className="mb-3" controlId="1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        id="title" 
                        type="text"  
                        onChange={(e) => setTitle(e.target.title)}
                    />
                    <Form.Text className="text-muted">
                    Enter the title for the job offer. Do not forget (m/w/d)!
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="2">
                    <Form.Label>Companyname</Form.Label>
                    <Form.Control  
                        id="companyname" 
                        type="text" 
                        onChange={(e) => setCompanyname(e.target.companyname)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                    <Form.Label>Type of job</Form.Label>
                    <Form.Control 
                        id="type" 
                        type="text" 
                        onChange={(e) => setType(e.target.type)} 
                    />
                    <Form.Text className="text-muted">
                    Enter one of the following: Minijob, Werkstudent, Abschlussarbeit
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="4">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        id="city" 
                        type="text" 
                        onChange={(e) => setCity(e.target.city)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="5">
                    <Form.Label>Weekly hors to work</Form.Label>
                    <Form.Control 
                        id="timeweekly" 
                        type="text" 
                        onChange={(e) => setTimeweekly(e.target.timeweekly)}   
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="6">
                    <Form.Label>Money(€) per hour</Form.Label>
                    <Form.Control 
                        id="money" 
                        type="text" 
                        onChange={(e) => setMoney(e.target.money)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="7">
                    <Form.Label>Text for worktogether</Form.Label>
                    <Form.Control 
                        id="textworktogether"
                        as="textarea" rows={5}
                        onChange={(e) => setTextworktogether(e.target.textworktogether)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="8">
                    <Form.Label>Text for expectations</Form.Label>
                    <Form.Control 
                        id="textexpectations" 
                        as="textarea" rows={5}
                        onChange={(e) => setTextexpectations(e.target.textexpectations)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="9">
                    <Form.Label>Which funnels should be displayed?</Form.Label>
                    <Form.Control 
                        id="funnelstodisplay" 
                        type="text"
                        onChange={(e) => setFunnelstodisplay(e.target.funnelstodisplay)}
                    />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={submitHandler}>
                Save and update job offer
            </Button>
        </Container>
    );
};

export default JobOffersEditor;