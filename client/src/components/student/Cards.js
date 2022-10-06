import {Container, ListGroup, Button } from 'react-bootstrap';
import axi from '../../api/axios';
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';


const Cards = () => {
    const [rawList, setRawList] = useState([]);
    const [helper, setHelper] = useState(0);
    

    let firstload = true;
    useEffect(() => {
        if (!firstload){
            axi.get('/companycards').then(response => {
                const d = response.data;
                //console.log(d);
                setRawList(d);
            }); 
        }else{
            firstload=false;
        }
      
    }, [])

    function showBig(companyuser){
        Navigate("/"+companyuser);
    }

    /** Only God knows what I am diong over here */

    return (
        <Container style={{
            width:'100%',
            maxHeight: '1100px'
        }}>
            <ListGroup>
            {rawList.map(card => (
                <>
                    <ListGroup.Item>
                        <a href={"/zukunftsregister/"+card.companyuser}><h2>{card.companyname}</h2></a>
                        branch: {card.branch}
                        <br/>
                        <ul>
                            <li>Adress: {card.adress}</li>
                            <li>Company size: {card.size}</li>
                            <li>Quote: {card.visionstatement}</li>
                        </ul>
                        <br/>
                        <Button href={"/zukunftsregister/"+card.companyuser}>Learn more</Button>
                        <br/>
                    </ListGroup.Item>
                </>
            ))}
            </ListGroup>
            <br/>
            <br/>
        </Container>
    );
}

export default Cards;


                         