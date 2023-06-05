/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const clubResults = require('../data/bundesliga_results.json')
const clubStats = require('../data/bundesliga_stats.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bundesliga_results').del()
  await knex('bundesliga_stats').del()
  await knex('bundesliga_results').insert(clubResults);
  await knex('bundesliga_stats').insert(clubStats);
};
