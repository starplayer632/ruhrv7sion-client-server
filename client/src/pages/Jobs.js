import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import JobsSearchBar from '../components/jobs/JobsSearchBar'
import JobOffers from '../components/jobs/JobOffers'



function Jobs() {
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


    //const dataset = getJobOffers();


	return (


		<Container style={{
            backgroundColor:'#f5f5f5',
            minHeight:'1015px',
        }}>        
            <Row style={{
                marginTop:'50px',
            }}>
                <br/>
                <JobsSearchBar />
                <div style={{
                    marginTop:'50px',
                }}>
                </div>
                <JobOffers />
                <div style={{
                    marginTop:'50px',
                }}>
                </div>
           </Row>
           <br/>
           <Button onClick={getJobOffers}>WRITE HERE</Button>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
        </Container>
	)
}

export default Jobs