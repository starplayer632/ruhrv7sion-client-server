import React from 'react'
import LandingBanner from '../../../components/student/LandingBanner';
import Header_Student_Login from '../../../components/headers/Header_Student_Login';
import Footer from '../../../components/Footer';


const ZukunftsregisterLogin = () => {
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student_Login/>
            <br/>
			<h2>Zukunftsregister: login version</h2>
			<div style={{
				backgroundColor:'#f5f5f5',
				height:'700px',
			}}>
			</div>
			<Footer/>
		</div>
	)
}

export default ZukunftsregisterLogin