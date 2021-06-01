const Sequelize = require( 'sequelize');
const { sequelize } = require( '../database/database');

const TaskModel = sequelize.define('tasks', {
    responsable: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false
})

module.exports = TaskModel;
