/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const clubResults = require('../data/epl_results.json')
const clubStats = require('../data/epl_stats.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('epl_results').del()
  await knex('epl_stats').del()
  await knex('epl_results').insert(clubResults);
  await knex('epl_stats').insert(clubStats);
};
