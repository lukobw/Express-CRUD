var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if(err) throw(err);
        fileContent = data;
        res.send(data);
    });   
});

app.post('/updateNote/:note', (req, res) => {
    fs.writeFile('./test.json', stringifyFile, (req, res, next) => {
        if(err) throw(err);
        console.log('file updated');
    });
    res.send(req.params.note);
});

app.listen(3002);