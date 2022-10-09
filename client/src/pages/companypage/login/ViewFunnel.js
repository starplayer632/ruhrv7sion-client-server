import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import {Container, Form, Button} from 'react-bootstrap';
import ShowFunnel from '../../../components/funnels/ShowFunnel';

const EditorFunnel = () => {
	const funnelid = ((document.URL).split("/"))[5];
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<br/>
				<h1>Show Funnel: {funnelid}</h1>
				<br/>
				<ShowFunnel />
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