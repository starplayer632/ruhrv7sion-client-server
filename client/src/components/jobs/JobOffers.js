import {Dropdown , Container, Button, Row, Col} from 'react-bootstrap'
import JobOffersMin from './JobOffersMin'
import JobOffersFull from './JobOffersFull'



function JobOffers() {
    //const JobDataPack = 0

    async function getJobDataPack(){
        //event.preventDefault()
/**
        const response = await fetch('http://localhost:1337/api/jobs/jobdatapack', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: 'ReqJobDataPack',
            }),
        })

        const data = await response.json()
        if (data.status = 'ok'){
            alert(data.ids)
        }else{
            alert(data.error)
        }
        

        console.log(data)*/
        
    }

    async function getJobOffers(){
        const response = await fetch('http://localhost:1337/api/jobs/joboffersnew', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
            }),
        })
    
        const data = await response.json()
        return data
    }

    const Jobs =  getJobOffers();
    var mandrill_events = JSON.parse(Jobs[0]);
var result = Jobs[0];

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
                <Button onClick="alert('Hi')">Click me</Button>
            </Row>
        </Container>
    );
}

export default JobOffers;