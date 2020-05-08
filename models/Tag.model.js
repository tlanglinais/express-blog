const { Model } = require("objection");

class Tag extends Model {
    static get tableName() {
        return "tags";
    }

    $beforeUpdate() {
        this.updated_at = new Date();
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" },
            },
        };
    }
}

module.exports = Tag;
