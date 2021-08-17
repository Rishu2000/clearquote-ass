const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 4000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json("server started.");
})

app.listen(port, () => {
    console.log("server listning to the port " + port);
})