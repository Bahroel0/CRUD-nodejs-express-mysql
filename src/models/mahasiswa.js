var Sequelize =  require("sequelize");
var config = require("./../../config");
var mysql = require("mysql");
var sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Mahasiswa = sequelize.define('mahasiswa', {
  id:{
    type: Sequelize.INTEGER,
    field: 'id',
    primaryKey: true
  },
  nrp:{
    type: Sequelize.STRING,
    field: 'nrp'
  },
  nama: {
    type: Sequelize.STRING,
    field: 'nama'
  },
  kelas_id: {
    type: Sequelize.INTEGER,
    field: 'kelas_id'
  }
},
{
  timestamps: false,
  tableName: 'mahasiswa'
})

module.exports = Mahasiswa;