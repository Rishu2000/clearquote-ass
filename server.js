const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.json("server started.");
})

app.listen(port, () => {
    console.log("server listning to the port " + port);
})