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
                <h1>Coming Soon!</h1>        
                <br/>
                <br/>
                <Button href="/">Back Home?</Button>
                <br/>
                <br/>
            </Container>
			<Footer/>
		</div>
		
	)
}

export default ComingSoon