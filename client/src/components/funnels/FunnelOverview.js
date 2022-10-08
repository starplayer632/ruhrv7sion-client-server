import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import {Container, Table, Button} from "react-bootstrap";
import isBuffer from "is-buffer";



const FunnelOverview = () => {
    const effectRan = useRef(false);
    const [funnellist, setFunnellist] = useState();
    const [activelist, setActivelist] = useState([]);
    const [offlinelist, setOfflinelist] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    //REACT 18 breakews useaffect runs it twice

    

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        let liste;
        if(effectRan.current === true){
            const getFunnellist = async () => {
                try {
                    const response = await axiosPrivate.get('/funnels', {
                        signal: controller.signal
                    });
                    console.log("RESPONSE:"+JSON.stringify(response.data));
                    setFunnellist(response.data);
                    liste = response.data;
                    for (let i = 0; i < liste.length; i++) {
                        if(liste[i].active===true){
                            setActivelist((activelist) => [...activelist, liste[i]]);
                        }else{
                            setOfflinelist((offlinelist) => [...offlinelist, liste[i]]);
                        }
                    }
                    console.log("activelist: "+JSON.stringify(activelist));
                    console.log("offlinelist: "+JSON.stringify(offlinelist));
                } catch (err) {
                    console.error(err);
                    navigate('/login', { state: { from: location }, replace: true });
                }
            }

            getFunnellist();
        }
        return () => {
            isMounted = false;
            effectRan.current = true;
            controller.abort();
        }
    }, [])

    function turnActive(id) {
        console.log("_id to do active: "+id);
        let data;
        offlinelist.map((offlinelist, i) => {
            if(offlinelist?._id===id){
                data = offlinelist;
            }
        });
        console.log("data: "+JSON.stringify(data));
        data.active=true;
        const updateFunnel = async () => {
            try {
                const response = await axiosPrivate.put('/funnels', 
                    JSON.stringify(data),{

                });
                console.log("response.data.status: "+response.data.status);
                if(response?.data?.status==="ok"){
                    alert("SUCCESS!");
                    navigate("/business/funnels");
                }
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        updateFunnel();
    }

    function turnOffline(id) {
        console.log("_id to do active: "+id);
        let data;
        activelist.map((activelist, i) => {
            if(activelist?._id===id){
                data = activelist;
            }
        });
        console.log("data: "+JSON.stringify(data));
        data.active=false;
        const updateFunnel = async () => {
            try {
                const response = await axiosPrivate.put('/funnels', 
                    JSON.stringify(data),{

                });
                console.log("response.data.status: "+response.data.status);
                if(response?.data?.status==="ok"){
                    alert("SUCCESS!");
                    navigate("/business/funnels");
                }
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        updateFunnel();
    }

    function turnDelete(id) {
        console.log("_id to do active: "+id);

        if(window.confirm("Delete the funnel?")) {
            
            const deleteFunnel = async () => {
                try {
                    let data;
                    offlinelist.map((offlinelist) => {
                        if(offlinelist?._id===id){
                            data = offlinelist;
                        }
                    });
                    console.log("data: "+JSON.stringify(data));
                    const response = await axiosPrivate.delete('/funnels', 
                        {data});
                    console.log("response.data.status: "+response.data.status);
                    if(response?.data?.status==="deleted"){
                        alert("Funnel deleted");
                        navigate("/business/funnels");
                    }
                } catch (err) {
                    console.error(err);
                    navigate('/business/login', { state: { from: location }, replace: true });
                }
            }

            deleteFunnel();

            
        }else{
            alert("Funnel NOT deleted");
        }

    }
    /*
    <h2>Funnellist</h2>
            {funnellist?.length
                ? (
                    <ul>
                        {funnellist.map((funnellist, i) => <li key={i}>{funnellist?.funnelname}</li>)}
                    </ul>
                ) : <p>No Funnels to display</p>
            }
            <br/>
            <br/>
    */

    return (
        <Container>
            <br/>
            <h4>Do you want to create a funnel? <Button href="/business/funnels/createnewfunnel">Create here</Button></h4>
            
            <br/>
            <br/>
            <h2>Active</h2>
            {activelist?.length
                ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Funnelname</th>
                                <th>Last time updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activelist.map((activelist) => 
                                <tr>
                                    <td>{activelist?._id}</td>
                                    <td>{activelist?.funnelname}</td>
                                    <td>{activelist?.updatedat}</td>
                                    <td>
                                        <Button onClick={()=>turnOffline(activelist._id)}>Turn offline</Button>
                                        <Button>View</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                ) : <p>No Funnels to display</p>
            }
            <br/>
            <br/>
            <h2>Not active</h2>
            {offlinelist?.length
                ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Funnelname</th>
                                <th>Last time updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offlinelist.map((offlinelist) => 
                                <tr>
                                    <td>{offlinelist?._id}</td>
                                    <td>{offlinelist?.funnelname}</td>
                                    <td>{offlinelist?.updatedat}</td>
                                    <td>
                                        <Button onClick={()=>turnActive(offlinelist._id)}>Turn active</Button>
                                        <Button>Safe View</Button>
                                        <Button>Edit</Button>
                                        <Button onClick={()=>turnDelete(offlinelist._id)}>Delete</Button>
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

export default FunnelOverview;