/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const clubsData = require('../data/bundesliga_clubs.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bundesliga_clubs').del()
  await knex('bundesliga_clubs').insert(clubsData);
};
