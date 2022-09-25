import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import JobsSearchBar from '../../../components/student/jobs/JobsSearchBar'
import JobOffers from '../../../components/student/jobs/JobOffers'
import Header_Student_Login from '../../../components/headers/Header_Student_Login'
import Footer from '../../../components/Footer'



function JobsLogin() {
  


	return (

        <div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student_Login/>
			<Container style={{
            backgroundColor:'#f5f5f5',
            minHeight:'1015px',
            }}>        
                <Row style={{
                    marginTop:'50px',
                }}>
                    <br/>
                    <h2>Jobs: Login version</h2>
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Container>
			<div style={{
				backgroundColor:'#f5f5f5',
				height:'320px',
			}}>
			</div>
			<Footer/>
		</div>
		
	)
}

export default JobsLogin