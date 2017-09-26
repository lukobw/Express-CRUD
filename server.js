const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if(err) throw(err);
        stringifyFile = data;
        res.send(data);
    });   
});

app.post('/updateNote/:note', (req, res) => {
    stringifyFile = req.params.note;
    fs.appendFile('./test.json', stringifyFile, (err) => {
        if(err) throw(err);
        console.log('file updated');
    });
});

app.listen(3010);