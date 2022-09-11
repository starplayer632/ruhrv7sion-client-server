import { useNavigate } from "react-router-dom"
import Header_Student from '../../components/headers/Header_Student';
import Footer from '../../components/Footer';
import {Container} from 'react-bootstrap';

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div>
            <Header_Student/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <h1>Unauthorized</h1>
                <br />
                <p>You do not have access to the requested page.</p>
                <div className="flexGrow">
                    <button onClick={goBack}>Go Back</button>
                </div>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Unauthorized