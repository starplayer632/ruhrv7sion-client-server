import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import {Container, Form, Button} from 'react-bootstrap';
import MatchesOverview from "../../../components/company/MatchesOverview";

const Matches = () => {
	
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<br/>
				<h1>Matches</h1>
				<br/>
				<MatchesOverview />
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

export default Matches