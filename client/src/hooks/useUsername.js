import axios from '../api/axios';
import useAuth from './useAuth';

//gets new refreshtoken for jwt from backend api: get /refresh
const useUsername = () => {
    const { setAuth } = useAuth();

    const user = async () => {
        const response = await axios.get('/username', {
            withCredentials: true
        });
        
        console.log(response);
        return response;
    }
    return user;
};

export default useUsername;