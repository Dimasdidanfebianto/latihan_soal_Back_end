'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: 'userId'});
      this.belongsTo(models.Shift, {foreignKey: 'shiftid'});
    }
  }
  Jadwal.init({
    userId: DataTypes.STRING,
    shiftid: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    waktuMulai: DataTypes.DATE,
    waktuSelesai: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Jadwal',
  });
  return Jadwal;
};