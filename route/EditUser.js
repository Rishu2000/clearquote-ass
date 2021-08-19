const express = require('express');
const edit = express();
const {knex} = require('./Signup');

edit.get('/', (req, res) => {
    res.json('edit User.');
})
edit.post('/', (req, res) => {
    if(req.session.Authentication){
        const {email,username,password,phoneNo} = req.body;
            if(username){
                knex('users')
                .where({email: email})
                .update({name: username})
            }
            if(password){
                knex('users')
                .where({email: email})
                .update({password: password})
            }
            if(phoneNo){
                knex('users')
                .where({email: email})
                .update({phone: phoneNo})
            }
        res.json({success: true,Message:"done"})
    }else{
        res.status(403).json({
            Success: false,
            Message: 'Authentication required.'
        })
    }
})

module.exports = edit;