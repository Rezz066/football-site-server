const knex = require("knex");
const knexConfig = require("./knexfile").development;
const db = knex(knexConfig);

const tableData = async (league) => {
  return await db(`${league}_clubs`)
    .join(
      `${league}_results`,
      `${league}_clubs.id`,
      "=",
      `${league}_results.club_id`
    )
    .join(
      `${league}_stats`,
      `${league}_clubs.id`,
      "=",
      `${league}_stats.club_id`
    )
    .select(
      `${league}_clubs.id`,
      "name",
      "logo",
      "matches_played",
      "wins",
      "draws",
      "losses",
      "goals_for",
      "goals_against",
      "goal_difference"
    );
};

const statsData = async (league) => {
  return await db(`${league}_clubs`)
    .join(
      `${league}_results`,
      `${league}_clubs.id`,
      "=",
      `${league}_results.club_id`
    )
    .join(
      `${league}_stats`,
      `${league}_clubs.id`,
      "=",
      `${league}_stats.club_id`
    )
    .select(
      `${league}_clubs.id`,
      "name",
      "logo",
      "matches_played",
      "goals_for",
      "goals_against",
      "goal_difference",
      "own_goals",
      "clean_sheets",
      "yellow_cards",
      "red_cards"
    );
};

module.exports = { tableData, statsData };
