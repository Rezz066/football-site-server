/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const clubsData = require('../data/epl_clubs.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('epl_clubs').del()
  await knex('epl_clubs').insert(clubsData);
};
