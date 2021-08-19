const express = require('express');
const edit = express();
const {knex} = require('./Signup');

edit.get('/', (req, res) => {
    res.json('edit User.');
})
edit.post('/', async (req, res) => {
    if(req.session.Authentication){
        const {email} = req.session.Authentication;
        const {username,password,phoneNo} = req.body;
            if(username){
                await knex('users')
                .where({email: email})
                .update({name: username})
            }
            if(password){
                await knex('users')
                .where({email: email})
                .update({password: password})
            }
            if(phoneNo){
                await knex('users')
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