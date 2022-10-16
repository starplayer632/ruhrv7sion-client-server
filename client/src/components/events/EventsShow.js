import React from 'react'
import { useState, useEffect, useRef } from "react";
import axios from "../../api/axios";
import { useNavigate, useLocation } from "react-router-dom";
import ShowYesNo from "../funnels/showfunnel/ShowYesNo";
import ShowOpen from "../funnels/showfunnel/ShowOpen";
import ShowSlider from "../funnels/showfunnel/ShowSlider";
import {Button, Container, Row, Col, Form, ListGroup} from "react-bootstrap";


function EventsShow({eventid}) {

    const [funnel1, setFunnel1]=  useState([]);
    const [q, setQ]=  useState([]);
    const navigate = useNavigate();
    const effectRan = useRef(false);
    const location = useLocation(); 
    const funnelid = eventid;
    const [hasAccount, setHasAccount]=  useState(false);

    let funnel;
    
    useEffect(() => {
        console.log("eventid: "+eventid)
        navigate("../../funnels/"+eventid);
    }, [])
    
    return (
        <>
        </>
    );
};

export default EventsShow;