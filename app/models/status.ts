import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Status extends Model { }

interface Status {
    id: number,
    name: string,
    card_id: number,
    color: string,
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
    });


export default Status;