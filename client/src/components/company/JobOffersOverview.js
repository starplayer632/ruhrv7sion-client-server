import {Button, Container, Table, Row, Col, Form, ListGroup} from "react-bootstrap";
import "../../index.css";
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";


const JobOffersOverview = () => {
    const [q, setQ]=  useState([]);
    const [active, setActive]=  useState([]);
    const [offline, setOffline]=  useState([]);
    const companyuser = Cookies.get('username');
    const navigate = useNavigate();
    const effectRan = useRef(false);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation(); 

    let offerlist;
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        if(effectRan.current === true){
            const getJobOffers = async () => {
                try {
                  const URL = '/safe/joboffers/user/'+companyuser;
                  const response = await axiosPrivate.get(URL, {
                      signal: controller.signal
                  });
                  offerlist = response.data;
                  for (let i = 0; i < offerlist.length; i++) {
                    if(offerlist[i].active===true){
                        setActive((active) => [...active, offerlist[i]]);
                    }else{
                        setOffline((offline) => [...offline, offerlist[i]]);
                    }
                  }
                  
                }catch (err) {
                  console.error(err);
                  navigate('/business/login', { state: { from: location }, replace: true });
                }
            }
            
            getJobOffers();    
        }
        
        return () => {
            isMounted = false;
            effectRan.current = true;
            controller.abort();
        }
    }, [])
    
    function turnOffline(id){
        let data;
        active.map((activelist, i) => {
            if(activelist?._id===id){
                data = activelist;
            }
        });

        const updateJoboffer = async () => {
            try {
                data.active=false;
                const URL = '/safe/joboffers/offer/'+id;
                const response = await axiosPrivate.put(URL, 
                    JSON.stringify(data),{

                });
                if(response?.data?.status==="ok"){
                    window.location.reload(false);
                }
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        

        updateJoboffer();
    }
    function turnActive(id){
        let data;
        offline.map((offlinelist, i) => {
            if(offlinelist?._id===id){
                data = offlinelist;
            }
        });

        const updateJoboffer = async () => {
            try {
                data.active=true;
                const URL = '/safe/joboffers/offer/'+id;
                const response = await axiosPrivate.put(URL, 
                    JSON.stringify(data),{

                });
                if(response?.data?.status==="ok"){
                    window.location.reload(false);
                }
            } catch (err) {
                console.error(err);
                navigate('/business/login', { state: { from: location }, replace: true });
            }
        }

        updateJoboffer();
    }
    function turnSafeView(id){

    }
    function turnShowPublic(id){
        
    }
    function turnEdit(id){
        const URL = "/business/jobs/editor/"+id;
        navigate(URL);
    }
    function turnDelete(id){

    }



    return (
        <Container>
            <br/>
            <h2>Active</h2>
            {active?.length
                ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Last time updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {active.map((activelist) => 
                                <tr>
                                    <td>{activelist?._id}</td>
                                    <td>{activelist?.title}</td>
                                    <td>{activelist?.updatedat}</td>
                                    <td>
                                        <Button onClick={()=>turnOffline(activelist._id)} style={{marginRight:"20px"}}>Turn offline</Button>
                                        <Button onClick={()=>turnShowPublic(activelist._id)} style={{marginRight:"20px"}}>View</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                ) : <p>No joboffers to display</p>
            }
            <br/>
            <br/>
            <h2>Not active</h2>
            {offline?.length
                ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Last time updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offline.map((offlinelist) => 
                                <tr>
                                    <td>{offlinelist?._id}</td>
                                    <td>{offlinelist?.title}</td>
                                    <td>{offlinelist?.updatedat}</td>
                                    <td>
                                        <Button onClick={()=>turnActive(offlinelist._id)} style={{marginRight:"20px"}}>Turn active</Button>
                                        <Button onClick={()=>turnSafeView(offlinelist._id)} style={{marginRight:"20px"}}>Safe View</Button>
                                        <Button onClick={()=>turnEdit(offlinelist._id)} style={{marginRight:"20px"}}>Edit</Button>
                                        <Button onClick={()=>turnDelete(offlinelist._id)} style={{marginRight:"20px"}}>Delete</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                ) : <p>No Funnels to display</p>
            }
        </Container>
    );
};

export default JobOffersOverview;