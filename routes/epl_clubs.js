const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

const tableData = async () => {
  return await db("epl_clubs")
    .join("epl_results", {
      "epl_clubs.id": "epl_results.club_id",
    })
    .join("epl_stats", { "epl_clubs.id": "epl_stats.club_id" })
    .select(
      "epl_clubs.id",
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

const statsData = async () => {
  return await db("epl_clubs")
    .join("epl_results", {
      "epl_clubs.id": "epl_results.club_id",
    })
    .join("epl_stats", { "epl_clubs.id": "epl_stats.club_id" })
    .select(
      '"epl_clubs.id"',
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

router.get("/", async (_req, res) => {
  try {
    const leagueTable = await tableData();

    console.log(leagueTable);

    if (leagueTable.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no clubs for that league" });
    }

    return res.status(200).send(leagueTable);
  } catch (err) {
    console.error(err);
  }
});

router.get("/stats", async (_req, res) => {
  try {
    const leagueStats = await statsData();

    if (leagueStats.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no stats for that club" });
    }

    return res.status(200).send(leagueStats);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
