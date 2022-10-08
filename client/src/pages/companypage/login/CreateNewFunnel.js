import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import CreateFunnel from '../../../components/funnels/CreateFunnel';
import {Container} from "react-bootstrap";



const CreateNewFunnel = () => {
   


	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<br/>
                <CreateFunnel />
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

export default CreateNewFunnel