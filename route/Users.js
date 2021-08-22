const express = require('express');
const users = express();
const {knex} = require('./Signup');

users.get('/', async (req,res) => {
    await knex('users')
    .select('*')
    .then((rows) => {
        res.json(rows);
    })
})

module.exports = users;