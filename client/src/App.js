import React from 'react'
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login'
import Register from './pages/Register'
import Error404 from './pages/Error404'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Jobs from './pages/Jobs.js';
import NewJobOffer from './pages/NewJobOffer.js';

const App = () => {
	
	function hasJWT() {
		let flag = false;
  
		//check user has JWT token
		localStorage.getItem("token") ? flag=true : flag=false
	   
		return flag
	}

	return (
		<div className="App" style={{
			backgroundColor:'#f5f5f5',
		}}>
			
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/jobs" exact element={<Jobs />} />
					<Route path="/dashboard" exact element={<Dashboard />} />
					<Route path="/register" exact element={<Register />} />
					<Route path="/jobs/newJobOffer" exact element={<NewJobOffer />} />
					<Route path="*" exact element={<Error404 />} />
				</Routes>
				
				<Footer />
			</BrowserRouter>
			
				
			
		</div>
	)
}

export default App