const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

//create a new app
const app = express();


//specify data types autorised
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());

//first route
app.get('/', (req, res) => {
  res.send("ici c'est l'imag");
});


var port = 4224; // ensicoin node port

// listen for requests
var server = app.listen(port, () => {
    console.log("Server is listening on port "+port);
});
