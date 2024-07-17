require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!!");
})

app.get('/twitter', (req, res) => {
    res.send("Welcome to twitter!!");
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login to chai aur code.</h1>');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcome to Chai aur Code channel.</h2>');
})

app.listen(process.env.PORT, () => {
    console.log("Server listening on 3000 port!!");
})