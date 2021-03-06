const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const login = require('./route/Login');
const logout = require('./route/Logout');
const {signup} = require('./route/Signup');
const edituser = require('./route/EditUser');
const deleteUser = require('./route/DeleteUser');
const users = require('./route/Users');
const session = require('express-session');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(session({
    secret: 'corona',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))
app.use(express.json());

app.use('/login',login);
app.use('/logout',logout);
app.use('/signup',signup);
app.use('/edituser',edituser);
app.use('/delete',deleteUser);
app.use('/users',users);

app.get('/', (req, res) => {
    res.json("server started.");
})

app.listen(port, () => {
    console.log("server listning to the port " + port);
})