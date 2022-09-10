import React from 'react'
import { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap';

const Login = () => {
	const [studentemail, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/jwtauth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				studentemail,
				password,
			}),
		})

		const data = await response.json() //status, accessToken, updateToken 
		if (data.status=="ok") {
			localStorage.setItem('accessToken', data.accessToken)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('ERROR: Please chekc username and password')
		}

		console.log(data)
	}

	return (
		<Container style={{
            backgroundColor:'#f5f5f5',
            height:'700px',

        }}>
			
			<h1>Login</h1>
			<br/>
			<Form onSubmit={loginUser}>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={studentemail} onChange={(e) => setEmail(e.target.value)}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</Form.Group>
				<Button variant="primary" type="submit" value="Login">
					Login
				</Button>
			</Form>
			<br/>
			<h3>Want to register?</h3>
			<Button href="/register">
				Register now
			</Button>
		</Container>
	)
}

export default Login