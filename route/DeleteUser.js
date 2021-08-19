const express = require('express');
const deleteUser = express();
const {knex} = require('./Signup');

deleteUser.delete('/',(req,res) => {
    if(req.session.Authentication){
        const {email} = req.body;
        knex('users')
        .where({email: email})
        .del()
        .then((rows) => {
            res.json({
                Success: true,
                Message: "Successfully deleted."
            })
        })
    }else{
        res.status(403).json({
            Success: false,
            Message: 'Authentication required.'
        })
    }
})

module.exports = deleteUser;