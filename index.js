const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.json({
        message: 'Hello world'
    })
})

app.listen(3000, () => {
    console.log("Started the server");
})