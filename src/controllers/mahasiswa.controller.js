var express = require("express");
var router = express.Router();
var response = require("./../res/response.js");
var dbconnection = require("./../mysql/database.js");
var Mahasiswa = require("../models/mahasiswa");

router.get('/', function(req, res){
  Mahasiswa.findAll().then(data => {
    response.ok(data, res);
  })
});

router.post('/create', function(req, res){

})



module.exports = router;