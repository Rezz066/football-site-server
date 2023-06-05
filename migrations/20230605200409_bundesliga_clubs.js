/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bundesliga_clubs',(table) => {
        table.integer('id').primary();
        table.integer('league_id').references("leagues.id").onUpdate("CASCADE").onDelete('CASCADE');
        table.string('name').notNullable();
        table.string('logo').notNullable();
        table.integer('founded_year').notNullable();
        table.string('city').notNullable();
        table.string('league').notNullable();
        table.string('country').notNullable();
        table.string('stadium').notNullable();
        table.timestamps(true,true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bundesliga_clubs');
};
