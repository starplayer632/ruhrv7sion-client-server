import React from 'react'
import LandingBanner from '../../../components/student/LandingBanner';
import Header_Student_Login from '../../../components/headers/Header_Student_Login';
import Footer from '../../../components/Footer';


const LandingStudentLogin = () => {
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student_Login />
			<LandingBanner />
			<div style={{
				backgroundColor:'#f5f5f5',
				height:'320px',
			}}>
			</div>
			<Footer/>
		</div>
	)
}

export default LandingStudentLogin