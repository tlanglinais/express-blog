exports.up = (knex) => {
  return knex.schema
    .createTableIfNotExists("users", (table) => {
      table.increments("id");
      table.string("email").unique().notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("password").notNullable();
      table.timestamps(true, true);
    })
    .createTableIfNotExists("tags", (table) => {
      table.increments("id");
      table.string("name").unique().notNullable();
      table.timestamps(true, true);
    })
    .createTableIfNotExists("blogs", (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.string("slug");
      table.integer("author_id").unsigned();
      table.integer("tag_id").unsigned();
      table.text("body");
      table.timestamps(true, true);

      table
        .foreign("author_id")
        .references("id")
        .inTable("users")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");

      table
        .foreign("tag_id")
        .references("id")
        .inTable("tags")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists("blogs")
    .dropTableIfExists("tags")
    .dropTableIfExists("users");
};
