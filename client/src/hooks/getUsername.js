import Cookies from 'js-cookie';


const getUsername = () => {
    return Cookies.get('username');
}

export default getUsername;