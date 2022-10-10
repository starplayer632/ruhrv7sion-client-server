import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import {Container, Accordion , Button} from "react-bootstrap";
import MatchAccordionItem from "./MatchAccordionItem";



const MatchesOverview = () => {
    const effectRan = useRef(false);
    const [allmatches, setAllmatches] = useState();
    const [matchesids, setMatchesids] = useState([]);
    //const [matcheslist, setMatcheslist] = useState([[],[]]);
    const [accordionnumber, setAccordionnumber] = useState(0);

    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    //REACT 18 breakews useaffect runs it twice

    function addAccordionnumber(){
        setAccordionnumber(accordionnumber+1);
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        if(effectRan.current === true){
            const getAllMatches = async () => {
                try {
                    const response = await axiosPrivate.get('/matches', {
                        signal: controller.signal
                    });
                    console.log("RESPONSE:"+JSON.stringify(response.data));
                    setAllmatches(response.data);
                    const data = response.data;
                    console.log("data.length: "+data.length);
                    let funnelidliste = [];
                    for (let i = 0; i < data.length; i++) {
                        if(i===0){
                            funnelidliste[i] = data[i].funnelid;
                        }else{
                            let inthere = false;
                            for (let j = 0; j < funnelidliste.length; j++) {
                                if(data[i].funnelid===funnelidliste[j]){
                                    inthere = true;
                                }else{
                                    inthere = false;
                                }     
                            }
                            if(inthere===false){
                                funnelidliste[funnelidliste.length] = data[i].funnelid;
                                console.log("data.funnelid ist jetzt in funnelidliste: "+JSON.stringify(data[i].funnelid));
                            }else{
                                console.log("data.funnelid ist in funnelidliste: "+JSON.stringify(data[i].funnelid));
                            }
                            
                        }
                    }
                    console.log("funnelidliste: "+funnelidliste);
                    console.log("funnelidliste.length: "+funnelidliste.length);
                    setMatchesids(funnelidliste);
                    /*for (let i = 0; i < funnelidliste.length; i++) {
                        
                    }*/

                } catch (err) {
                    console.error(err);
                    navigate('/business/login', { state: { from: location }, replace: true });
                }
            }

            getAllMatches();
        }
        return () => {
            isMounted = false;
            effectRan.current = true;
            controller.abort();
        }
    }, [])


    return (
        <Container>
            <br/>
            <Accordion defaultActiveKey="0">
                {matchesids.map((id, index) => (
                    <MatchAccordionItem id={id} index={index} allmatches={allmatches}/>
                ))}
            </Accordion>
        </Container>
    );
};

export default MatchesOverview;