import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import {Container, Row, Col, Table, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axi from '../../../api/axios';

const CompanyJobs = () => {
	const companyuser = Cookies.get('username');
    const [jobofferlistonline, setJobofferlistonline] = useState([]);
	const [jobofferlistoffline, setJobofferlistoffline] = useState([]);
    
	let firstload = true;
    useEffect(() => {
        if(!firstload){
            const URL = '/joboffers/user/'+companyuser;
			let d;
            axi.get(URL).then(response => {
                d = response?.data;
			    for (let i = 0; i < d.length; i++) {
					console.log("active: "+d[i].companyuser);
					if (d[i].active === true){
						setJobofferlistonline((jobofferlistonline) => [...jobofferlistonline, d[i]]);
					}else{
						setJobofferlistoffline((jobofferlistoffline) => [...jobofferlistoffline, d[i]]);
					}
				} 
            });
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
				<br/>
				<h1>JobOffers</h1>
				<br/>
				<br/>
				<h1>Online:</h1>
				<br/>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>
								Companyname
							</th>
							<th>
								Title
							</th>
							<th>
								Type
							</th>
							<th>
								Options
							</th>
						</tr>
					</thead>
					<tbody>
						{jobofferlistonline.map(job => (
							<>
								<tr>
									<th>
										{job.companyname}
									</th>
									<th>
										{job.title}
									</th>
									<th>
										{job.type}
									</th>
									<th>
										<Button>Sample View</Button>
										<Button>Set offline</Button>
									</th>
								</tr>
							</>
						))}
					</tbody>
				</Table>
				<br/>
				<h1>Offline:</h1>
				<br/>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>
								Companyname
							</th>
							<th>
								Title
							</th>
							<th>
								Type
							</th>
							<th>
								Options
							</th>
						</tr>
					</thead>
					<tbody>
						{jobofferlistoffline.map(job => (
							<>
								<tr>
									<th>
										{job.companyname}
									</th>
									<th>
										{job.title}
									</th>
									<th>
										{job.type}
									</th>
									<th>
										<Button>Sample View</Button>
										<Button>Set offline</Button>
									</th>
								</tr>
							</>
						))}
					</tbody>
				</Table>
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