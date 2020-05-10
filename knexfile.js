module.exports = {
    development: {
        client: "mysql",
        connection: {
            // host: credentials.host,
            host: process.env.DB_HOST,
            // database: credentials.database,
            database: process.env.DB,
            // user: credentials.user,
            user: process.env.DB_USER,
            // password: credentials.password,
            password: process.env.DB_PASSWORD,
        },
    },
    debug: true,
};
