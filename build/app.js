"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('This service is up and running, thanks for asking, OLE!');
});
app.get('/helloTo', function (req, res) {
    res.send('Dear ' + req.query.name + ', nice to meet you finally! :)');
});
app.listen(8081, function () {
    console.log('Service is listening on port 8081');
});
