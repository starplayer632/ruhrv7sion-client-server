import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import Cookies from 'js-cookie';
import {Container, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axi from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
const CARDS_URL = '/companycards/';
const CARDSEXIST_URL = '/companycards/exist/';


const CompanyCard = () => {
    const { setAuth } = useAuth();
	const [companyname, setCompanyname] = useState('');
    const [adress, setAdress] = useState('');
    const [size, setSize] = useState('');
    const [products, setProducts] = useState('');
    const [branch, setBranch] = useState('');
    const [visionstatement, setVisionstatement] = useState('');
    const [infotext, setInfotext] = useState('');
    const companyuser = Cookies.get('username');
    let isExist = false;


    let firstload = true;
    useEffect(async () => {
        if(!firstload){
            const URL = '/companycards/'+companyuser;
            /*axi.get(URL).then(response => {
                const d = response?.data;
                //console.log("------------");
                //console.log(d);
                //console.log("------------");
            }); */
        }else{
            firstload=false;
        }
    }, [])


/*
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(CARDS_URL,
                JSON.stringify({companyuser, companyname, adress, size, products, visionstatement, infotext, branch }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
        } catch (err) {
            console.log(err);
        }
    }*/


	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>{/* 
				<br/>
				<h1>Create new funnel:</h1>
                   
                    <form onSubmit={handleSubmit} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                flexGrow: 1,
                                paddingBottom: '1rem',
                    }}>
                        <label htmlFor="companyname">companyname:</label>
                        <input
                            type="text"
                            id="companyname"
                            onChange={(e) => setCompanyname(e.target.value)}
                            required
                            placeholder={companyname}
                        /><br/>
                        <label htmlFor="adress">adress:</label>
                        <input
                            type="text"
                            id="adress"
                            onChange={(e) => setAdress(e.target.value)}
                            required
                        /><br/>
                        <label htmlFor="size">size:</label>
                        <input
                            type="text"
                            id="size"
                            onChange={(e) => setSize(e.target.value)}
                            required
                        /><br/>
                        <label htmlFor="products">products:</label>
                        <input
                            type="text"
                            id="products"
                            onChange={(e) => setProducts(e.target.value)}
                            required
                        /><br/>
                        <label htmlFor="branch">branch:</label>
                        <input
                            type="text"
                            id="branch"
                            onChange={(e) => setBranch(e.target.value)}
                            required
                        /><br/>
                        <label htmlFor="visionstatement">visionstatement:</label>
                        <input
                            type="text"
                            id="visionstatement"
                            onChange={(e) => setVisionstatement(e.target.value)}
                            required
                        /><br/>
                        <label htmlFor="infotext">infotext:</label>
                        <input
                            type="text"
                            id="infotext"
                            onChange={(e) => setInfotext(e.target.value)}
                            required
                        /><br/>

                        <button>Create</button>
                    </form>
				<br/>*/}
			</Container>
			<br/>
			<div style={{
				backgroundColor:'#f5f5f5',
				height:'320px',
			}}>
			</div>
			<Footer/>
		</div>
	)
}

export default CompanyCard