import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Status extends Model { }

Status.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        tableName: "status",
        createdAt: "created_at",
        updatedAt: "updated_at",
    });


export default Status;