import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Card from './card';
class List extends Model { }

interface List {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    user_id: number,
    cards: Card[],
};

List.init(
    {
        name: {
            type: DataTypes.TEXT,
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