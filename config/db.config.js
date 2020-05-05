// Create a connection to the database
const connection = mysql.createConnection({
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
});

// open the MySQL connection
connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;
