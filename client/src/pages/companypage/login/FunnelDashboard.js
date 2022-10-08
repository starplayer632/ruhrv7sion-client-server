import FunnelOverview from "../../../components/funnels/FunnelOverview";
import {Container} from "react-bootstrap";
import Header_Company_Login from '../../../components/headers/Header_Company_Login';
import Footer from '../../../components/Footer';

const FunnelDashboard = () => {

    return (
        <div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Company_Login />
			<Container>
                <br/>
                <FunnelOverview />
                <div style={{
                    backgroundColor:'#f5f5f5',
                    height:'320px',
                }}>
                </div>
			</Container>
			<Footer/>
		</div>
    );
};

export default FunnelDashboard;