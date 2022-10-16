import React from 'react';
import Header_Student_Login from '../../../components/headers/Header_Student_Login';
import Footer from '../../../components/Footer';
import {Container, Form, Button} from 'react-bootstrap';
import ShowMatches from '../../../components/student/ShowMatches';

const StudentMatches = () => {
	
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student_Login/>
			<br/>
			<Container>
				<h1>Matches:</h1>
				<br/>
				<ShowMatches />
			</Container>
			<br/>
			<div style={{
				backgroundColor:'#f5f5f5',
				height:'320px',
			}}>
			</div>
			<Footer/>
		</div>
	)
}

export default StudentMatches