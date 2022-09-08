import React from 'react'
//react Router for Routing
import { BrowserRouter, Route, Routes} from 'react-router-dom'
//loading bootstrap min local
import 'bootstrap/dist/css/bootstrap.min.css';

//import pages
import Login from './pages/Auth/Login'
import Register from './pages/Register'
import Error404 from './pages/Error404'
import Dashboard from './pages/Dashboard'
import Home from './pages/studentpage/LandingStudent'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Jobs from './pages/Jobs.js';
import NewJobOffer from './pages/NewJobOffer.js';

//App as const -> as a function
const App = () => {
	
	//hasJWT does the user has a token?
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
			{/** Routing wihtout ROLES */}
			<BrowserRouter>
			{/** For now Header and Footer will stay the same until ROLES and Persistent User Login Authentication with JWT Tokens is been solved*/}
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