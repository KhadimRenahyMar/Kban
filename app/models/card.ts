import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Status from './status';

class Card extends Model { }

interface Card {
    id: number,
    title: string,
    color: string,
    list_id: number,
    status_id: number,
    status: Status,
    createdAt: Date,
    updatedAt: Date,
};

Card.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        }
    },
    {
        sequelize,
        tableName: 'card',
        createdAt: "created_at",
        updatedAt: "updated_at",
    });


export default Card;