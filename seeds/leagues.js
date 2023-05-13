/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const leaguesData = require('../data/leagues.json');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('leagues').del()
  await knex('leagues').insert(leaguesData);
};
