import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import {Container, Form, Button} from 'react-bootstrap';
import EditFunnel from '../../../components/funnels/EditFunnel';

const EditorFunnel = () => {
	const funnelid = ((document.URL).split("/"))[6];
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<br/>
				<h1>Editor for Funnel with id: {funnelid}</h1>
				<br/>
				<EditFunnel />
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

export default EditorFunnel