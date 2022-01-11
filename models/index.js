const User = require('./User');
const Bills = require('./Bills');


User.hasMany(Bills, {
    foreignkey: "user_id",
    onDelete: "CASCADE",
})
Bills.belongsTo(User, {
    foreignKey: "user_id",
})


module.exports = { User, Bills };
