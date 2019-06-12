import express = require('express');

const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('This service is up and running, thanks for asking.');
});

app.get('/helloTo', function (req, res) {
    res.send('Dear ' + req.query.name + ', nice to meet you finally! :)');
});
  
app.listen(8081, function () {
    console.log('Service is listening on port 8081');
});

