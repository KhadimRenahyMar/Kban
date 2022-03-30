import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Status extends Model { }

interface Status {
    id: number,
    name: string,
    card_id: number,
    color: string,
    createdAt: Date,
    updatedAt: Date,
};

Status.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        color: {
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