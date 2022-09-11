import React from 'react'
import LandingBanner from '../../components/student/LandingBanner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const LandingStudent = () => {
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header/>
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

export default LandingStudent