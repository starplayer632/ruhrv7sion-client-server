import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import Cookies from 'js-cookie';
import {Container, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axi from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import { getSystemErrorMap } from 'util';
import { Navigate } from 'react-router-dom';



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
    useEffect(() => {
        if(!firstload){
            const URL = '/companycards/'+companyuser;
            axi.get(URL).then(response => {
                const d = response?.data;
                setCompanyname(d.companyname);
                setAdress(d.adress);
                setBranch(d.branch);
                setInfotext(d.infotext);
                setProducts(d.products);
                setVisionstatement(d.visionstatement);
                setSize(d.size);
                //console.log("------------");
                //console.log(d);
                //console.log("------------");
            }); 
        }else{
            firstload=false;
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response;
        try {
            const URL = '/companycards';
            response = await axi.post(URL,
                JSON.stringify({companyuser, companyname, adress, size, products, visionstatement, infotext, branch }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            
            //console.log(JSON.stringify(response));
        } catch (err) {
            console.log(err);
        }
        
        if(response?.data?.status=="ok"){
            alert("SUCEES: Data updated!");
        }

        console.log(JSON.stringify(response?.data));
    }


	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<br/>
				<h1>Here you can change the card information:</h1>
                <br/>
                <h4>Note that the current data is prefield in the inputs!</h4>
                <br/>
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
                            defaultValue={companyname}
                        /><br/>
                        <label htmlFor="adress">adress:</label>
                        <input
                            type="text"
                            id="adress"
                            onChange={(e) => setAdress(e.target.value)}
                            required
                            defaultValue={adress}
                        /><br/>
                        <label htmlFor="size">size:</label>
                        <input
                            type="text"
                            id="size"
                            onChange={(e) => setSize(e.target.value)}
                            required
                            defaultValue={size}
                        /><br/>
                        <label htmlFor="products">products:</label>
                        <input
                            type="text"
                            id="products"
                            onChange={(e) => setProducts(e.target.value)}
                            required
                            defaultValue={products}
                        /><br/>
                        <label htmlFor="branch">branch:</label>
                        <input
                            type="text"
                            id="branch"
                            onChange={(e) => setBranch(e.target.value)}
                            required
                            defaultValue={branch}
                        /><br/>
                        <label htmlFor="visionstatement">visionstatement:</label>
                        <textarea
                            type="text"
                            id="visionstatement"
                            onChange={(e) => setVisionstatement(e.target.value)}
                            required
                            defaultValue={visionstatement}
                        /><br/>
                        <label htmlFor="infotext">infotext:</label>
                        <textarea
                            type="text"
                            id="infotext"
                            onChange={(e) => setInfotext(e.target.value)}
                            required
                            defaultValue={infotext}
                        /><br/>

                        <button>Update company card now!</button>
                    </form>
				<br/>
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