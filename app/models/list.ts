import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Card from './card';
import Status from './status';
class List extends Model { }

interface List {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    cards: Card[],
    status: Status,
};

List.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        color: {
            type: DataTypes.CHAR(15),
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
        tableName: 'list',
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    
);

export default List;