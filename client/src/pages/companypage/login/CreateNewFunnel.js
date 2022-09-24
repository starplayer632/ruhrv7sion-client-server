import React from 'react';
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';
import Cookies from 'js-cookie';
import {Container, Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
const FUNNEL_URL = '/funnels/';


const CreateNewFunnel = () => {
    const { setAuth } = useAuth();
	const [funnelname, setFunnelname] = useState('');
    const companyuser = Cookies.get('username');
    const questions = JSON.stringify({"questions": "Do you like pineapple-pizza?"});

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("funnelname: "+funnelname)
        console.log("companyuser: "+companyuser)
        console.log("questions: "+questions)
        try {
            const response = await axios.post(FUNNEL_URL,
                JSON.stringify({funnelname, companyuser, questions }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            setFunnelname('');
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


	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<br/>
			<Container>
				<br/>
				<h1>Create new funnel:</h1>
                   
                    <form onSubmit={handleSubmit} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                flexGrow: 1,
                                paddingBottom: '1rem',
                    }}>
                        <label htmlFor="funnelname">Funnelname:</label>
                        <input
                            type="text"
                            id="funnelname"
                            onChange={(e) => setFunnelname(e.target.value)}
                            required
                        />

                        <button>Create</button>
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

export default CreateNewFunnel