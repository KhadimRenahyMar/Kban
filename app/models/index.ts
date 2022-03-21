import User from './user';
import List from './list';
import Card from './card';
import Status from './status';

User.hasMany(List, {
    foreignKey: "user_id",
    as: "lists"
});

List.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

List.hasMany(Card, {
    foreignKey:"list_id",
    as: "cards",
});

Card.belongsTo(List, {
    foreignKey:"list_id",
    as: "list",
});

Card.belongsTo(Status, {
    foreignKey: "status_id",
    as: "status",
})

Status.hasMany(Card, {
    foreignKey: "status_id",
    as: "cards",
})

export { User, List, Card, Status};