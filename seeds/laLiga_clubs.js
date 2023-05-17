/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const clubsData = require('../data/laLiga_clubs.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('laLiga_clubs').del()
  await knex('laLiga_clubs').insert(clubsData);
};
