const express = require('express');
const router = express.Router();
const pool = require('./helpers/database');
const bcrypt = require('bcrypt');



router.get('/:id', async function(req,res){
    try {
        const sqlQuery = 'SELECT studentid, studentemail, password, created_at FROM user_students WHERE studentid=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


    res.status(200).json({id:req.params.id})
});

router.post('/register', async function(req,res) {
    try {
        const {studentemail, password} = req.body;
        
        const encryptedPassword = await bcrypt.hash(password,10)

        const sqlQuery = 'INSERT INTO user_students (studentemail, password) VALUES (?,?)';
        const result = await pool.query(sqlQuery, [studentemail, encryptedPassword]);

        res.status(200).json({status: "ok"})
    } catch(error) {
        res.status(400).send(error.message)
        console.log("ERROR")
    }
})



/** /api/jwtauth/login
router.post('/login', async function(req,res) {
    try {
        const {studentid,password} = req.body;

        const sqlGetUser = 'SELECT password FROM user_students WHERE studentid=?';
        const rows = await pool.query(sqlGetUser,studentid);
        if(rows){
            
            const isValid = await bcrypt.compare(password,rows[0].password)
            res.status(200).json({valid_password: isValid});
        }
        res.status(200).send('user_students with studentid was not found'); //APP CRASHES HERE
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})*/

module.exports = router;

