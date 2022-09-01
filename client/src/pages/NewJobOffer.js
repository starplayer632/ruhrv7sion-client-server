import React from 'react'
import {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap';

function NewJobOffer() {
	const [jobofferid, setJobofferid] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [money, setMoney] = useState('')
    const [time, setTime] = useState('')
    const [city, setCity] = useState('')
    const [textFacts, setTextFacts] = useState('')
    const [textCooperation, setTextCooperation] = useState('')
    const [textYourBring, setTextYourBring] = useState('')
    
    
    async function createNewJobOffer(event) {
		event.preventDefault()

    //Send as Json
        const date = new Date()
		const response = await fetch('http://localhost:1337/api/jobs/newjoboffer', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				jobofferid,
				email,
				title,
                company,
                money,
                time,
                city,
                textFacts,
                textCooperation,
                textYourBring,
                date
			}),
		})

		const data = await response.json()
    	console.log(data)
		if (data.status === 'ok') {
			alert("OK! Done!")
		} else {
            alert("ERROR!")
        }
	}
    
    
    
    
    return (
		<Container style={{
            backgroundColor:'#f5f5f5',
            minHeight:'700px',
        }}>
			<h1>Create new Job Offer here</h1>
			<br/>
			<Form onSubmit={createNewJobOffer}>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>jobofferid</Form.Label>
					<Form.Control type="text" placeholder="jobofferid" value={jobofferid} onChange={(e) => setJobofferid(e.target.value)}/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>title</Form.Label>
					<Form.Control type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>company</Form.Label>
					<Form.Control type="text" placeholder="company" value={company} onChange={(e) => setCompany(e.target.value)}/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>money</Form.Label>
					<Form.Control type="text" placeholder="money" value={money} onChange={(e) => setMoney(e.target.value)}/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>time</Form.Label>
					<Form.Control type="text" placeholder="time" value={time} onChange={(e) => setTime(e.target.value)}/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>city</Form.Label>
					<Form.Control type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)}/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>textFacts</Form.Label>
					<Form.Control type="text" placeholder="textFacts" value={textFacts} onChange={(e) => setTextFacts(e.target.value)}/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>textCooperation</Form.Label>
					<Form.Control type="text" placeholder="textCooperation" value={textCooperation} onChange={(e) => setTextCooperation(e.target.value)}/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>textYourBring</Form.Label>
					<Form.Control type="text" placeholder="textYourBring" value={textYourBring} onChange={(e) => setTextYourBring(e.target.value)}/>
				</Form.Group>
				<Button variant="primary" type="submit" value="Publish Offer">
					Publish Offer
				</Button>
			</Form>
		<br/>



		</Container>
	)
}

export default NewJobOffer