const { Model } = require("objection");
const slugify = require("slugify");

// Models
const User = require("./User.model");
const Tag = require("./Tag.model");

class Blog extends Model {
    static get tableName() {
        return "blogs";
    }

    $beforeUpdate() {
        this.updated_at = new Date();
        this.slug = slugify(this.title);
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title", "author_id", "tag_id", "body"],
            properties: {
                title: { type: "string" },
                author_id: { type: "integer" },
                tag_id: { type: "integer" },
                body: { type: "string" },
            },
        };
    }

    static get relationMappings() {
        return {
            author_id: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "blogs.author_id",
                    to: "users.id",
                },
            },
            tag_id: {
                relation: Model.BelongsToOneRelation,
                modelClass: Tag,
                join: {
                    from: "blogs.tag_id",
                    to: "tags.id",
                },
            },
        };
    }
}

module.exports = Blog;
