import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import {Container, Form, Button} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import axi from '../../../api/axios';
import { useState, useEffect } from 'react';

const Profile = () => {
	const companyuser = Cookies.get('username');
	const [list, setList] = useState('');

	let firstload = true;
    useEffect(async () => {
        if(firstload==false){
            const URL = '/users/companyuser';
            const response = await axi.post(URL,
                JSON.stringify({companyuser}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
        }else{
            firstload=false;
        }
    }, [])

	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<h1>Your company profile information</h1>
				<br/>

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

export default Profile