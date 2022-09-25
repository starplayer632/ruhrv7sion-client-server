/**
 * FROM MARIUSZ just imported

import React from "react";

export default function LandingPage() {
  return <div>LandingPage</div>;
}
 */

import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import Header_Company from '../../components/headers/Header_Company'
import Footer from '../../components/Footer'



function ComingSoon() {
  


	return (

        <div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company />
			<Container style={{
            backgroundColor:'#f5f5f5',
            minHeight:'1015px',
            }}>
                <br/>
                <br/>
                <br/>
                <h1>Landing Companypage</h1>        
                <br/>
                <br/>
                <Button href="/">Back to main page?</Button>
                <br/>
                <br/>
            </Container>
			<Footer/>
		</div>
		
	)
}

export default ComingSoon