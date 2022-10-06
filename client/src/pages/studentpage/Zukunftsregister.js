import React from 'react'
import LandingBanner from '../../components/student/LandingBanner';
import Header_Student from '../../components/headers/Header_Student';
import Footer from '../../components/Footer';
import Cards from '../../components/student/Cards.js';
import { Container } from 'react-bootstrap';


const Zukunftsregister = () => {
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student/>
            <br/>
			<Container>
				<h2>Zukunftsregister</h2>
				<br/>
				<Cards />
				<br/>
			</Container>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<Footer/>
		</div>
	)
}

export default Zukunftsregister