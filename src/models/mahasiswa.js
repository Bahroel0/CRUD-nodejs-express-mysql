var Sequelize =  require("sequelize");
var sequelize = require('../db/sequalize');

var tableAttribute = {
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
};

var tableConfig = {
  timestamps: false,
  tableName: 'mahasiswa'
}

var Mahasiswa = sequelize.define('mahasiswa', tableAttribute, tableConfig);

module.exports = Mahasiswa;