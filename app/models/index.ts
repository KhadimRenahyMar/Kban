import List from './list';
import Card from './card';
import Status from './status';

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

export { List, Card, Status};