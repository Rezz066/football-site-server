/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("laLiga_results",(table) => {
      table.integer('id').primary();
      table.integer('club_id').references('laLiga_clubs.id').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('matches_played').notNullable();
      table.integer('wins').notNullable();
      table.integer('draws').notNullable();
      table.integer('losses').notNullable();
      table.timestamps(true,true);
    })
    .createTable('laLiga_stats', (table) => {
      table.integer('id').primary();
      table.integer('club_id').references('laLiga_clubs.id').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('goals_for').notNullable();
      table.integer('goals_against').notNullable();
      table.integer('goal_difference').notNullable();
      table.integer('own_goals').notNullable();
      table.integer('clean_sheets').notNullable();
      table.integer('yellow_cards').notNullable();
      table.integer('red_cards').notNullable();
      table.timestamps(true,true);
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable('laLiga_results')
      .dropTable('laLiga_stats') 
  };
