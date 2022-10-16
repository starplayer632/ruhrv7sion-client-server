import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import Header_Student from '../../components/headers/Header_Student'
import Footer from '../../components/Footer'
import EventsShow from '../../components/events/EventsShow'



function Events({eventid}) {
  


	return (

        <div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Container style={{
            backgroundColor:'#f5f5f5',
            minHeight:'1015px',
            }}>
                <br/>
                <br/>
                <br/>    
                <EventsShow eventid={eventid}/>
                <br/>
                <br/>
            </Container>
			<Footer/>
		</div>
		
	)
}

export default Events