import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import {Container, Button, Table, Row, Col} from "react-bootstrap";



const MatchesNewest = () => {
    const effectRan = useRef(false);
    const [newestMatch, setNewestMatch] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    //REACT 18 breakews useaffect runs it twice

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        if(effectRan.current === true){
            const getNewest = async () => {
                try {
                    const response = await axiosPrivate.get('/matches/newest', {
                        signal: controller.signal
                    });
                    console.log("newest: "+JSON.stringify(response.data));
                    setNewestMatch(response.data);
                }catch (err) {
                    console.error(err);
                    //navigate('/business/login', { state: { from: location }, replace: true });
                }
            }
            getNewest();
        }
        return () => {
            isMounted = false;
            effectRan.current = true;
            controller.abort();
        }
    }, [])

    /**
     * THROWS WHITE PAGE AND ERROR BONDARIES
     * 
     * <tr>
                        <td>Questions</td>
                        <td>
                            {newestMatch.questions.map((question, index)=>(
                                <>
                                    {index}. {question.type} {question.question}
                                    <br/>
                                </>
                            ))} 
                        </td>
                    </tr>
                    <tr>
                        <td>Answers</td>
                        <td>
                            {newestMatch.answers.map((answer, indi)=>(
                                <>
                                    {indi}. {answer.value}
                                    <br/>
                                </>
                            ))} 
                        </td>
                    </tr>
     * 
     * 
     */


    return (
        <Container>
            <h3>Newest Match:</h3>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Funnelname (id)</td>
                        <td>{newestMatch.funnelname} ({newestMatch._id})</td>
                    </tr>
                    <tr>
                        <td>Createdat</td>
                        <td>{newestMatch.createdat}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{newestMatch.name}</td>
                    </tr>
                    <tr>
                        <td>E-Mail</td>
                        <td>{newestMatch.email}</td>
                    </tr>
                    
                </tbody>
            </Table>

            
        </Container>
    );
};

export default MatchesNewest;