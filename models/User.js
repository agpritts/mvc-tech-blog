const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {

}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
      hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await(newUserData.password);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await(updatedUserData.password);
            return updatedUserData;
        }
      },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;