const express = require("express");
const router = express.Router();
const { tableData, statsData } = require("../utils");

router.get("/", async (_req, res) => {
  try {
    const leagueTable = await tableData("epl");

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
    const leagueStats = await statsData("epl");

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
