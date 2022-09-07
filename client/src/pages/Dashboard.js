import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate  } from "react-router-dom";
import {Container, Form, Button} from 'react-bootstrap';

const Dashboard = () => {
    const navigate = useNavigate()
    const [post, setQuote] = useState('')
	const [studentid, setStudentid] = useState('')
    const [tempQuote, setTempQuote] = useState('')

	
	async function tokenIsValid() {
		const auth = localStorage.getItem('refreshToken')
		const response = await fetch('http://localhost:1337/api/jwtauth/tokenvalid', {
			method: 'POST',
			headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "token": auth,
            }),
		})

		const data = await response.json() //status, accessToken, updateToken 
		alert("data.status: "+data.status)
		if (data.status=="error") {
			return false
		}else{
			return true
		}
	}

    async function populateQuote(){
		const auth = 'Bearer ' + localStorage.getItem('accessToken')
		const req = await fetch('http://localhost:1337/quote', {
			method: 'GET',	
			headers: {
				'Authorization': auth,
				
			},

		})

		const data = await req.json()
		setQuote(data[0].title)
		console.log("DataTitle: "+data[0].title)
		/**if (data[0].status === 'ok') { //add Status???
			setQuote(data[0].title)
			console.log("DataTitle: "+data[0].title)
		} else {
			alert(data.error)
		}*/
	}

	async function populateID(){
		const auth = 'Bearer ' + localStorage.getItem('accessToken')
		const req = await fetch('http://localhost:1337/getID', {
			method: 'GET',	
			headers: {
				'Authorization': auth,
				
			},

		})

		const data = await req.json()
		setStudentid(data[0].studentid)
		//console.log("DataTitle: "+data[0].studentid)
		/**if (data[0].status === 'ok') { //add Status???
			setQuote(data[0].title)
			console.log("DataTitle: "+data[0].title)
		} else {
			alert(data.error)
		}*/
	}


    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken){
            const user = jwt.decode(accessToken)
			console.log(jwt.decode(accessToken))
            if(!user){
                localStorage.removeItem('accessToken')
                navigate('/login')
            }else{
				populateID()
				populateQuote()
				/**const valid = tokenIsValid();
				if(valid==true){
					alert('Need to login NONONONONONO')
					window.location.href = '/login'
				}else{
					populateID()
					populateQuote()
				}*/
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
			<h1>Your studentid: {studentid || 'No studentid found'}</h1>
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