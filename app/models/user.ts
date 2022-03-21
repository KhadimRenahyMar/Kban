import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class User extends Model { }

User.init(
    {
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 2
            },
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 2,
            },
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 9,
            },
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 6,
            },
        },
    },
    {
        sequelize,
        tableName: "users",
        createdAt: "created_at",
        updatedAt: "updated_at",
    });


export default User;