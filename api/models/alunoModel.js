const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Aluno = sequelize.define('Aluno', {
	idaluno: {
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

module.exports = Aluno;
