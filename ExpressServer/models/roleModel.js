const Sequelize = require('sequelize');
const {sequelizeConnection} = require('../config/server/sequelizeConfig')

const  Role = sequelizeConnection.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
},
{
tableName:'role',
timestamps: true
}
);

module.exports = Role;