const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

router.get("/", async (_req, res) => {
  try {
    const leagueTable = await db("epl_clubs")
      .join("epl_results", {
        "epl_clubs.id": "epl_results.club_id",
      })
      .join("epl_stats", { "epl_clubs.id": "epl_stats.club_id" })
      .select("*");

    if (leagueTable.length === 0) {
      res.status(404).json({ message: "There are no clubs for that league" });
    }

    res.status(200).send(leagueTable);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
