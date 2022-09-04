import {Container, Row, Col} from 'react-bootstrap'
import JobOffersMin from './JobOffersMin'
import JobOffersFull from './JobOffersFull'
import React, { useState } from 'react';


function JobOffers() {


    async function getJobOffers(){
        const response = await fetch('http://localhost:1337/api/jobs/joboffersnew', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
            }),
        })
        //const data = await response.json()
        return response.json() 
    }

    const JobsRAW =  getJobOffers();
    const list = [];
    //const Jobs = JSON.parse(JobsRAW);
    console.log("JobsRAW created:")
    console.log(JobsRAW)
    /*JobsRAW.resolve('Success').then(
        (value) => {
          console.log(value); // "Success"
          list.push(value);
        },
        (reason) => {
          // not called
        },
      );
    console.log("Länge: "+list.length)*/

    if(Array.isArray(JobsRAW)){
        console.log("JobsRAW IS array")
    }else{
        console.log("JobsRAW NO array")
    }
    const data = [];


    /*console.log('start resolve')
    let i = 0;
    Promise.resolve(JobsRAW).then(value=>{
        console.log('value:',value)
        data[i]=value;
        i=i+1;
        console.log('asdsad')
        }) 
    console.log(data[0])    
    console.log('end resolve')*/
    //console.log("length is: "+JobsRAW.length)
   
    return (
        <Container style={{
            width:'100%'
        }}>
            <Row style={{
                width:'100%',
            }}>
                <Col xs={4} style={{
                    borderRight:'3px solid gray',
                }}>
                    
                    <JobOffersMin title="Praktikum in HR" time="20" money="13" city="Bochum" company="Leato GmbH"/>
                    <JobOffersMin title="WerkstudentIn im Bereich Marketing" time="10" money="12" city="Bottrop" company="ThisIsFine AG"/>
                    <JobOffersMin title="WerkstudentIn in HR" time="18" money="16" city="Mülheim an der Ruhr" company="ITCool Gbr"/>
                    <JobOffersMin title="Abschlussarbeit Beachlor Data Analysis" time="40" money="15" city="Oberhausen" company="Leato GmbH"/>
                    <JobOffersMin title="Abschlussarbeit Master ITIL Implemention" time="40" money="18" city="Bochum" company="Leato GmbH"/>
                    <JobOffersMin title="Minijob/Aushilfe in IT Helpdesk" time="8" money="12" city="Bochum" company="DeepfakeAgency GmbH"/>
                    <JobOffersMin title="Praktikum in HR" time="35" money="14" city="Dortmund" company="Leato GmbH"/>
                </Col>
                <Col style={{
                    //border:'3px solid red',
                    padding:'20px',
                }}>
                    <JobOffersFull title="Praktikum in HR" id="1"/>
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