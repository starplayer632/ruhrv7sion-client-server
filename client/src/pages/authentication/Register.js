import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reg from "../../components/Register";
import Header_Student from "../../components/headers/Header_Student";
import Footer from "../../components/Footer";

function Register() {
  /*  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
		event.preventDefault()

    //Send as Json
    
		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
    	console.log(data)
		if (data.status === 'ok') {
			navigate('/login')
		}
	}

  return (
	<Container style={{
		backgroundColor:'#f5f5f5',
		height:'700px',
	}}>
		<h1>Register</h1>
			<br/>
			<Form onSubmit={registerUser}>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</Form.Group>
				<Button variant="primary" type="submit" value="Register">
					Register
				</Button>
			</Form>
		<br/>
		
			
			
			{/*<form onSubmit={registerUser}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Register" />
</form>}

    </Container>
  );*/

  return (
    <div>
      <Header_Student />
      <div style={{ minHeight: "100vh" }}>
        <br />
        <br />
        <br />
        <br />
        <Reg />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Register;
