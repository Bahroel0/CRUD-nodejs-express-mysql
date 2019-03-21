var express = require("express");
var router = express.Router();
var response = require("./../res/response.js");
var Mahasiswa = require("../models/mahasiswa");

router.get('/', function(req, res){
  Mahasiswa.findAll().then(data => {
    response.ok(data, res);
  })
});

router.get('/:id', function(req, res){
  var id = parseInt(req.params.id);
  Mahasiswa.findAll({
    where: {
      id: id
    }
  }).then(data => {
    response.ok(data, res);
  })
})

router.post('/create', function(req, res){

})
module.exports = router;

