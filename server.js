const express = require("express");
const path = require("path");
const knex = require("./config/knex");
const { Model } = require("objection");

const app = express();

// Bind objection models to knex
Model.knex(knex);

// body parser
app.use(express.json());

// Static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Welcome to the app.");
});

app.use("/users", require("./routes/user.route"));
app.use("/tags", require("./routes/tag.route"));
app.use("/blogs", require("./routes/blog.route"));

app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);
