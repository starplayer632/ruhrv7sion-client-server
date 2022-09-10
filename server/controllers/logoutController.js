const usersDB = {
    users: require('../models/users.json'),
    setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //succesful but No content to sent back
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) {
       // console.log("!foundUser: clearCookie");
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //delete cookie //JUST PRODCUTION!!! uses https!!!
        //res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });
        return res.sendStatus(204); //succesful but No content to sent back
        
    }

    // Delete refreshToken in db
    const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
    const currentUser = { ...foundUser, refreshToken: '' };
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'models', 'users.json'),
        JSON.stringify(usersDB.users)
    );
    //console.log(" Delete refreshToken in db: clearCookie");
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //JUST PRODCUTION!!! uses https!!!
    //res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });
    res.sendStatus(204); //succesful but No content to sent back
}

module.exports = { handleLogout }