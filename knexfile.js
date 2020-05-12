const credentials = require("./config/credentials");

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: credentials.host,
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
    },
  },
  debug: true,
};
