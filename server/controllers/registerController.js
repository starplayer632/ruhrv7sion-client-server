const User = require('../model/User');
const CompanyCard = require('../model/Companycard');
const bcrypt = require('bcrypt');


const handleNewUser = async (req, res) => {
    const { user, pwd, typeOfUser, realname, email } = req.body;
    if (!user || !pwd || !typeOfUser || !realname || !email ) return res.status(400).json({ 'message': 'Username and password are required.' });
    // check for duplicate usernames in the db
    const duplicateUser = await User.findOne({ username: user }).exec();
    if (duplicateUser) return res.sendStatus(409); //Conflict 
    const duplicateEmail = await User.findOne({ email: email }).exec();
    if (duplicateEmail) return res.sendStatus(409); //Conflict
    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //create and store the new user depending on Student or Company
        let result;
        if(typeOfUser==="student"){
            result = await User.create({
                "username": user,
                "password": hashedPwd,
                "roles": {User: 2001, StudentUser: 2710},
                "name": realname,
                "email": email
            });
        }else if(typeOfUser==="company"){
            result = await User.create({
                "username": user,
                "password": hashedPwd,
                "roles": {User: 2001, CompanyUser: 3109},
                "name": realname,
                "email": email
            });

            const result2 = await CompanyCard.create({
                companyuser: user,
                companyname: "",
                adress: "",
                size: 0,
                products: "",
                branch: "",
                visionstatement: "",
                infotext: ""
            });   
        }

        
        res.status(201).json({ 'success': `New user ${user} created!` })
        console.log(result);
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }

}

module.exports = { handleNewUser };