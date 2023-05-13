/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("leagues", (table) => {
    table.integer("id").primary();
    table.string("name").notNullable();
    table.string("country").notNullable();
    table.string("logo").notNullable();
    table.string("country_flag").notNullable();
    table.integer("coefficient").notNullable();
    table.integer("founding_year").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("leagues");
};
