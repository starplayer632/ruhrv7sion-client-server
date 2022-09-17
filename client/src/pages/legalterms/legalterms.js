import React from 'react';
import Header_Student_Login from '../../../components/headers/Header_Student_Login';
import Footer from '../../../components/Footer';
import {Container, Form, Button} from 'react-bootstrap';

const LegalTerms = () => {
	
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student_Login/>
			<br/>
			<Container>
				<h1>Your profile</h1>
				<br/>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Change Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
						We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Change Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
						<Form.Label>Repeat Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
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

export default LegalTerms