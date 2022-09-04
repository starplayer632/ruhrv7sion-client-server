import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import JobsSearchBar from '../components/jobs/JobsSearchBar'
import JobOffers from '../components/jobs/JobOffers'



function Jobs() {
  


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
           <Button onClick="">WRITE HERE</Button>
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