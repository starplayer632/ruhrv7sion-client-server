import React from 'react'
import {Container, Row, Form, Button} from 'react-bootstrap'
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
        </Container>
	)
}

export default Jobs