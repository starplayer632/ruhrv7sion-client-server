import React from 'react'
import {Container, Form, Button} from 'react-bootstrap';

const Error404 = () => {
	return (
		<Container style={{
            backgroundColor:'#f5f5f5',
            height:'700px',
        }}>
			<h1>ERROR 404 Page not found</h1>
			<br/>
			<Button href="/">Back to home?</Button>
		</Container>
	)
}

export default Error404