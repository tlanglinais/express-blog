const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

// Set up environment variables
dotenv.config({ path: "./config/config.env" });

const db = require("./config/db_connection");
const { Model } = require("objection");

const app = express();

// Bind objection models to knex
Model.knex(db);

// body parser
app.use(express.json());

// Static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
    res.send("Welcome to the app.");
});

app.use("/api/users", require("./routes/user.route"));
app.use("/api/tags", require("./routes/tag.route"));
app.use("/api/blogs", require("./routes/blog.route"));

// const mysql = require("mysql");
// let connection = mysql.createConnection({
//     host: "localhost",
//     user: "blogUser",
//     port: "3306",
//     password: "2RBSlah",
//     database: "testdb",
// });

// connection.connect((err) => {
//     if (!err) console.log("Database connected!");
//     else console.log("Failed");
// });

app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);
