import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import {Container, Form, Button} from 'react-bootstrap';

const CompanyJobs = () => {
	
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<br/>
				<h1>My job offers are here listed</h1>
				<br/>
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

export default CompanyJobs