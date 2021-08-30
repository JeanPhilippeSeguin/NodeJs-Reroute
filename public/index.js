const { response, request } = require('express');
const express = require('express');
const path = require('path');
const url = require('url');
const fs = require('fs');
const QueryString = require('qs');
const app = express();

app.use(express.static(__dirname + 'public'));
const port = process.env.port || 5000;



app.get('/',(request, response) => {
    response.sendFile('index.html', {
        root: './'
    })
})

app.get('/about', (request, response) => {
    response.sendFile('about.html', {
        root: './'
    })
})

app.get('/contact-me', (request, response) => {
    response.sendFile('contact-me.html', {
        root: './'
    })
})
app.use(function (req, res, next) {
    res.status(404).sendFile('404.html',{
        root: './'
    })
  })

app.listen(port, () => {
    const search = request.originalUrl;
    console.log(`Request is ${request.url}`)
})


 