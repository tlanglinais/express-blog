const express = require("express");
const path = require("path");
const db = require("./config/db.config");

const app = express();

require("dotenv").config();

// body parser
app.use(express.json());

// Static folder
app.use(express.static(path.join(__dirname, "public")));

db.authenticate()
    .then(() => console.log("Database connected."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Welcome to the app.");
});

app.use("/users", require("./routes/user.routes"));

// const routes = require("./routes/user.routes");
// const routes = require("./routes/blog.routes");
// routes(app);

app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);
