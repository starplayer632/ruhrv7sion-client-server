import React from 'react'
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Error404 from './pages/Error404'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const App = () => {
	return (
		<div className="App">
			
			<BrowserRouter>
				<nav>
					<Link to="/Register">Register</Link>
					<Link to="/login">login</Link>
					<Link to="/">Home</Link>
					<br/>
          		</nav>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/dashboard" exact element={<Dashboard />} />
					<Route path="/register" exact element={<Register />} />
					<Route path="*" exact element={<Error404 />} />
				</Routes>
			
			</BrowserRouter>
			
				
			
		</div>
	)
}

export default App