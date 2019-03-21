var express = require("express");
var router = express.Router();
var response = require("./../res/response.js");
var dbconnection = require("./../mysql/database.js");

router.get('/', function(req, res){
  response.ok("Welcome to RESTFull Api Node Express Mysql", res)
});


module.exports = router;