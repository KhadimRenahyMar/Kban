import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Card extends Model { }

Card.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        color: {
            type: DataTypes.CHAR(15),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        tableName: 'card',
        createdAt: "created_at",
        updatedAt: "updated_at",
    });


export default Card;