import Cookies from 'js-cookie';
import useAuth from './useAuth';


const getUsername = () => {
    //return Cookies.get('username');
    const { setAuth } = useAuth();
    let help;

    setAuth(prev => {
        console.log(JSON.stringify(prev));
        console.log(response.data.accessToken);
        help=response.data.accessToken;
        return { 
            ...prev, 
            roles: response.data.roles,
            accessToken: response.data.accessToken }
    });
    return help;
}

export default getUsername;