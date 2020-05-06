// file to force sequalize to sync all models to db
// User.sync({ force: true })
// https://sequelize.org/v5/manual/getting-started.html
const Sequalize = require("sequelize");
const User = require("./models/User.model");
User.sync({ force: true })
    .then(() => console.log("Synced up"))
    .catch((err) => console.log(err));
