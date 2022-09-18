import React from 'react'
import {Container, Button} from 'react-bootstrap';
import Header_Student from '../components/headers/Header_Student'
import Footer from '../components/Footer'

const Error404 = () => {
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student />
			<Container style={{
				backgroundColor:'#f5f5f5',
				height:'700px',
			}}>
				<br/>
				<br/>
				<br/>
				<h1>ERROR 404 Page not found</h1>
				<br/>
				<Button href="/">Back to home?</Button>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
			</Container>
			<Footer />
		</div>
	)
}

export default Error404