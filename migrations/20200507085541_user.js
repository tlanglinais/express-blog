exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments();
        table.string("email").unique().notNullable();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("password").notNullable();
        table.datetime("createdOn").defaultTo(knex.fn.now());
        table.datetime("updatedOn").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};
