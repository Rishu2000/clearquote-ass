const express = require('express');
const signup = express();

const knex = require('knex')({
    client:'pg',
    connection:'postgres://postgres:rishavpgsql@localhost:5432/clearquote_ass_db'
})

signup.get('/',(req, res) => {
    const {Authentication} = req.session;
    if(Authentication){
        res.json(Authentication);
    }else{
        res.status(403).json({
            Success:false,
            Message: 'Authentication required.'
        })
    }
})
signup.post('/',(req, res) => {
    const {username,email,password} = req.body;
    if(!email || !password || !username){
        req.session.destroy();
        res.status(400).json({
            Success:false,
            Message:"Please enter all the required fields."
        });
    }else{
        knex('users')
        .where({email: email})
        .then((rows) => {
            if(rows.length > 0){
                req.session.destroy();
                res.status(406).json({
                    Success: false,
                    Message:"email already exist."
                })
            }else{
                knex('users')
                .insert({name:username, password:password, email:email})
                .then(() => {
                    req.session.Authentication = req.body;
                    res.status(201).json({
                        Success: true,
                        Message:username
                    });
                    console.log(req.session);
                })
            }
        })
    }
})

module.exports = {signup,knex};