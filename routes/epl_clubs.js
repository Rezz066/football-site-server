const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

const data = async () => {
  return await db("epl_clubs")
    .join("epl_results", {
      "epl_clubs.id": "epl_results.club_id",
    })
    .join("epl_stats", { "epl_clubs.id": "epl_stats.club_id" })
    .select("*");
};

router.get("/", async (_req, res) => {
  try {
    const leagueTable = await data();

    console.log(leagueTable);

    if (leagueTable.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no clubs for that league" });
    }

    if (leagueTable) {
      const filteredTable = leagueTable.map((club) => {
        return {
          id: club.id,
          club_id: club.club_id,
          name: club.name,
          logo: club.logo,
          matches_played: club.matches_played,
          wins: club.wins,
          draws: club.draws,
          losses: club.losses,
          goals_for: club.goals_for,
          goals_against: club.goals_against,
          goal_difference: club.goal_difference,
        };
      });
      return res.status(200).send(filteredTable);
    }
  } catch (err) {
    console.error(err);
  }
});

router.get("/stats", async (_req, res) => {
  try {
    const leagueStats = await data();

    if (leagueStats.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no stats for that club" });
    }

    if (leagueStats) {
      const filteredStats = leagueStats.map((club) => {
        return {
          id: club.id,
          club_id: club.club_id,
          name: club.name,
          logo: club.logo,
          goals_for: club.goals_for,
          goals_against: club.goals_against,
          goal_difference: club.goal_difference,
          own_goals: club.own_goals,
          clean_sheets: club.clean_sheets,
          yellow_cards: club.yellow_cards,
          red_cards: club.red_cards,
        };
      });

      return res.status(200).send(filteredStats);
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
