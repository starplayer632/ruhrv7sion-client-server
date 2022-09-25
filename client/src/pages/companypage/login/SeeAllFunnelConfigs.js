import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import Cookies from 'js-cookie';
import {Container, Form, Button, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
const FUNNELCONFIGS_URL = '/funnels/getallfunnelconfigs/';


const SeeAllFunnelConfigs = () => {
    
    const { setAuth } = useAuth();
    const [list, setList] = useState('');
    const [table, setTable] = useState([]);

    async function getallfunnelconfigs(){
        const user = Cookies.get('username');
            console.log("companyuser: "+user);
            const URL = FUNNELCONFIGS_URL+user;
            try {
                const response = await axios.get(URL).then(function (response) {
                    console.log(JSON.stringify(response?.data));
                    response?.data.forEach(element => {
                        console.log("---");
                        console.log(element);
                        console.log("---");
                        setTable(table => [...table, element]);
                    });
                    return response?.data;
                });
                
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
    }

    let secload = false;
    useEffect(() => {
        if (secload){
            getallfunnelconfigs();
            
        }
        secload=true;
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
				<br/>
                {JSON.stringify(table[0].funnelname)}
                <br/>
                {table.forEach(element => {
                    
                })}
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