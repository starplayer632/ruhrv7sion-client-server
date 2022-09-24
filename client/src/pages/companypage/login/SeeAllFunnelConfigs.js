import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import Cookies from 'js-cookie';
import {Container, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
const FUNNEL_URL = '/funnels/getallfunnelconfigs';


const SeeAllFunnelConfigs = () => {
    let firstload = true;
    const { setAuth } = useAuth();
    
    let list;
    useEffect(async () => {
        if (!firstload){
            const user = Cookies.get('username');
            console.log("companyuser: "+user);
            try {
                const response = await axios.post(FUNNEL_URL,
                    JSON.stringify({user}),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                console.log(JSON.stringify(response?.data));
                list=response?.data;
                //console.log(JSON.stringify(response));
            } catch (err) {
            /* if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Failed');
                }*/
                //errRef.current.focus();
                // <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            }
        }else{
            firstload=false;
        }
    }, [])



	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<br/>
				<h1>All Funnels:</h1>
                {list}
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

export default SeeAllFunnelConfigs