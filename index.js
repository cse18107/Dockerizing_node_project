const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.get('/home', (req, res) => {
    res.json({
        message: 'Hello world'
    })
})

app.listen(process.env.PORT, () => {
    console.log("Started the server");
})