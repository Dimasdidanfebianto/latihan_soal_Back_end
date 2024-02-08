'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PenugasanTambahan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PenugasanTambahan.init({
    userId: DataTypes.STRING,
    tanggalPenugasan: DataTypes.DATE,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PenugasanTambahan',
  });
  return PenugasanTambahan;
};