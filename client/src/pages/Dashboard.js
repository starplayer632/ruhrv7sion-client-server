import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate  } from "react-router-dom";
import {Container, Form, Button} from 'react-bootstrap';

const Dashboard = () => {
    const navigate = useNavigate()
    const [post, setQuote] = useState('')
	const [studentid, setStudentid] = useState('')
    const [tempQuote, setTempQuote] = useState('')

	
	async function tokenIsValid(accessToken) {
		console.log("started tokenIsValid")
		const auth = 'Bearer ' + accessToken
		const response = await fetch('http://localhost:1337/api/jwtauth/isValid2', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				'token': accessToken
			})
		})
		//const data = response
		try{
			const data = response.json() //status, accessToken, updateToken 
			return data
			if (data.status=="ok") return true
		}catch{
			//console.log("ERROR CATCH")
			//console.log(err)
			const error = {"status":"error"}
			return error
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
		alert("req: "+req)
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


    useEffect( () => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken){
            const user = jwt.decode(accessToken)
			console.log(jwt.decode(accessToken))
            if(!user){
                localStorage.removeItem('accessToken')
				alert("!user drinnen")
                navigate('/login')
            }else{
				//populateID()
				//populateQuote()
				//alert("accessToken: "+accessToken)
				
				/**if(valid){
					alert('Need to login NONONONONONO')
					//window.location.href = '/login'
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