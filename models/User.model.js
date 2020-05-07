const { Model } = require("objection");

class User extends Model {
    static get tableName() {
        return "users";
    }

    fullName() {
        return this.first_name + " " + this.last_name;
    }

    $beforeUpdate() {
        this.updatedOn = new Date();
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["first_name", "last_name", "email", "password"],
            properties: {
                id: { type: "integer" },
                first_name: { type: "string" },
                last_name: { type: "string" },
                email: { type: "email" },
            },
        };
    }

    static get relationMappings() {
        const Blog = require("./Blog.model");
        return {
            blogs: {
                relation: Model.HasManyRelation,
                modelClass: Blog,
                join: {
                    from: "user.id",
                    to: "blog.author",
                },
            },
        };
    }
}

module.exports = User;
