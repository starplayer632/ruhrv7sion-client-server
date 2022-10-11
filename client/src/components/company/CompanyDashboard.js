import {Button, Container, Table, Row, Col, Form, ListGroup} from "react-bootstrap";
import "../../index.css";
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import MatchesOverview from "./MatchesOverview";

const JobOffersEditor = () => {
    const [joboffer, setJoboffer]=  useState([]);
    const [randomOffer, setRandomOffer]=  useState([]);
    const [card, setCard]=  useState([]);
    const companyuser = Cookies.get('username');

    const navigate = useNavigate();
    const effectRan = useRef(false);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation(); 
    const jobofferid = ((document.URL).split("/"))[6];
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        let on = [];
        let offerlist;
        if(effectRan.current === true){
            const getJobOffers = async () => {
                try {
                    const URL = '/safe/joboffers/user/'+companyuser;
                    const response = await axiosPrivate.get(URL, {
                        signal: controller.signal
                    });
                    offerlist = response.data;
                    console.log("offerlist.length: "+offerlist.length);
                    for (let i = 0; i < offerlist.length; i++) {
                        if(offerlist[i].active===true){
                            on[on.length]=offerlist[i];
                        }
                    }
                    const min = 0;
                    const max = on.length;
                    let random =  Math.round(Math.random() * (max - min)) + min;
                    if(random===max){
                        random = random-1;
                    }
                    
                    on.map((job, index) => {
                        if(index===random){
                            setRandomOffer(job);
                        }
                    });

                }catch (err) {
                  console.error(err);
                  navigate('/business/login', { state: { from: location }, replace: true });
                }
            }

            const getCard = async () => {
                try {
                    const URL = '/companycards/'+companyuser;
                    const response = await axiosPrivate.get(URL, {
                        signal: controller.signal
                    });
                    setCard(response.data);
                }catch (err) {
                  console.error(err);
                  navigate('/business/login', { state: { from: location }, replace: true });
                }
            }
            
            getJobOffers();
            getCard();

        }
        
        return () => {
            isMounted = false;
            effectRan.current = true;
            controller.abort();
        }
    }, [])



    return (
        <Container>
            <Row>
                <h2>Welcome back {companyuser}!</h2>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col>
                    <Container>
                        <h4>Random active job offer</h4>
                        <br/>
                        <Row>
                            <Col>
                                Title:
                            </Col>
                            <Col>
                                {randomOffer.title}
                            </Col> 
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                Type:
                            </Col>
                            <Col>
                                {randomOffer.type}
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                Workinghours per week:
                            </Col>
                            <Col>
                                {randomOffer.timeweekly}
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Button href={"/business/jobs/editor/"+randomOffer._id} style={{
                                    width:"80%"
                                }}>Edit this job</Button>
                            </Col>
                            <Col>
                                <Button href="/business/jobs"style={{
                                    width:"80%"
                                }}>See all jobs</Button>
                            </Col>
                            
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <h4>CompanyCard</h4>
                        <br/>
                        <Row>
                            <Col>
                                Companyname
                            </Col>
                            <Col>
                                {card.companyname}
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                Adress
                            </Col>
                            <Col>
                                {card.adress}
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                Branch
                            </Col>
                            <Col>
                                {card.branch}
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Button href="/business/companycard">
                                Now update company info?
                            </Button>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <br/>
            <br/>
            <h4 style={{textAlign:"center"}}>All matches:</h4>
            <MatchesOverview />
        </Container>
    );
};

export default JobOffersEditor;