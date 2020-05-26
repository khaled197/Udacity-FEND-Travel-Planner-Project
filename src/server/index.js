let tripInfo = {};

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json)
app.use(cors());


app.use(express.static('dist'))

app.get('/', function(req, res) {
    res.sendFile('index.html', path.resolve(__dirname, '../../dist'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
});
