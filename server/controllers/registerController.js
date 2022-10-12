const User = require('../model/User');
const CompanyCard = require('../model/Companycard');
const bcrypt = require('bcrypt');


const handleNewUser = async (req, res) => {
    const { user, pwd, typeOfUser } = req.body;
    if (!user || !pwd || !typeOfUser ) return res.status(400).json({ 'message': 'Username and password are required.' });
    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 
    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //create and store the new user depending on Student or Company
        console.log("typeOfUser: "+typeOfUser)
        let result;
        if(typeOfUser==="student"){
            result = await User.create({
                "username": user,
                "password": hashedPwd,
                "roles": {User: 2001, StudentUser: 2710}
            });
        }else if(typeOfUser==="company"){
            result = await User.create({
                "username": user,
                "password": hashedPwd,
                "roles": {User: 2001, CompanyUser: 3109}
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