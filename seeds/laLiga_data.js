/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const clubResults = require('../data/laLiga_results.json')
const clubStats = require('../data/laLiga_stats.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('laLiga_results').del()
  await knex('laLiga_stats').del()
  await knex('laLiga_results').insert(clubResults);
  await knex('laLiga_stats').insert(clubStats);
};
