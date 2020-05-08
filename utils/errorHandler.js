const errorHandler = (error, req, res, next) => {
    console.log("Hello from the error handler!");
    console.log(error);

    switch (error.name) {
        case "ValidationError":
            res.send({
                message: "Please fill out all fields.",
                missing_fields: Object.keys(error.data),
            });
            break;

        default:
            res.send({ message: "Something went wrong..." });
            break;
    }
};

module.exports = errorHandler;
