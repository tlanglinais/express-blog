const { Model, raw } = require("objection");
const slugify = require("slugify");
const summarize = require("../utils/summarize");
// Models
const User = require("./User.model");
const Tag = require("./Tag.model");

class Blog extends Model {
  static get tableName() {
    return "blogs";
  }

  $beforeInsert() {
    console.log("Trigger beforeInsert");
    this.slug = slugify(this.title, { lower: true });
    this.summary = summarize(this.body);
  }

  $beforeUpdate() {
    console.log("Trigger beforeUpdate");
    console.log(this);
    if (this.body) {
      this.summary = summarize(this.body);
    }
    if (this.title) {
      this.slug = slugify(this.title, { lower: true });
    }
    this.updated_at = new Date();
  }

  async $beforeDelete() {
    const tag = await Tag.query().patchAndFetchById(this.tag_id, {
      count: raw("count - 1"),
    });
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "author_id", "tag_id", "body"],
      properties: {
        title: { type: "string" },
        author_id: { type: "integer" },
        tag_id: { type: "integer" },
        body: { type: "text" },
      },
    };
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "blogs.author_id",
          to: "users.id",
        },
      },
      tag: {
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
