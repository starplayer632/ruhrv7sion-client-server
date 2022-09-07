import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate  } from "react-router-dom";
import {Container, Form, Button} from 'react-bootstrap';

const Dashboard = () => {
    const navigate = useNavigate()
    const [post, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')


    async function populateQuote(){
		const auth = 'Bearer '+localStorage.getItem('accessToken')
		const req = await fetch('http://localhost:1337/api/quote', {
			headers: {
				'Authorization': auth,
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(data.post)
		} else {
			alert(data.error)
		}
	}

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/login')
            }else{
                populateQuote()
            }
        }
    }, [])

    async function updateQuote(event) {
		event.preventDefault()

		const req = await fetch('http://localhost:1337/api/quote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				quote: tempQuote,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(tempQuote)
			setTempQuote('')
		} else {
			alert(data.error)
		}
	}






    return (
        <Container style={{
            backgroundColor:'#f5f5f5',
            height:'700px',
        }}>
			<h1>Your post: {post || 'No post found'}</h1>
			<form onSubmit={updateQuote}>
				<input
					type="text"
					placeholder="Quote"
					value={tempQuote}
					onChange={(e) => setTempQuote(e.target.value)}
				/>
				<input type="submit" value="Update quote" />
			</form>
		</Container>
    )
}


export default Dashboard