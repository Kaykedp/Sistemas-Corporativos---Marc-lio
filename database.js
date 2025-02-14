const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('NestJs', 'postgres', 'ifrn.cn', 
	{host: 'localhost', dialect: 'postgres'});

module.exports = sequelize;
