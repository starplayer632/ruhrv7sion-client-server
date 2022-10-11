import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import JobOffersEditor from "../../../components/company/JobOffersEditor";
import {Container} from "react-bootstrap";

const CompanyJobsEditor = () => {



	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<h1>JobOffers</h1>
				<br/>
				<JobOffersEditor/>
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

export default CompanyJobsEditor