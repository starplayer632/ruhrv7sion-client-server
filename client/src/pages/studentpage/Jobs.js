import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import JobsSearchBar from '../../components/student/jobs/JobsSearchBar'
import JobOffers from '../../components/student/jobs/JobOffers'
import Header_Student from '../../components/headers/Header_Student'
import Footer from '../../components/Footer'



function Jobs() {

	return (

        <div style={{
			backgroundColor:'#f5f5f5'
		}}>
			<Header_Student/>
			<Container style={{
                backgroundColor:'white',
                minHeight:'1015px'
            }}>        
                <Row>
                    <br/>
                    {/*<JobsSearchBar />*/}
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
                <br/>
                <br/>
                <br/>
            </Container>
			<Footer/>
		</div>
		
	)
}

export default Jobs