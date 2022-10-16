import React from 'react';
import Header_Student from '../../components/headers/Header_Student';
import Footer from '../../components/Footer';
import {Container, Form, Button} from 'react-bootstrap';
import ShowFunnelPublic from "../../components/funnels/ShowFunnelPublic";

const ViewFunnelPublic = () => {
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student />
			<br/>
			<Container>
				<br/>
				<ShowFunnelPublic />
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

export default ViewFunnelPublic