const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')
// const constants = require("../common/constants")


const MessageModel = sequelizeConnection.define(
    'message',
    {
        id_message:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },
        message:{
            type: Sequelize.STRING,
            allowNull: false,
            field: 'message',
        },
        sender_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'sender_id',
        },
        recipient_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'recipient_id',
        },
        created_at: {
            type: Sequelize.DATE,
            field: 'created_at'
        }
    },
    {
        tableName: 'message',
        timestamps: false
    }
)

module.exports = MessageModel