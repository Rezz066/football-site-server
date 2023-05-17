const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

// Get all leagues
router.get("/", async (_req, res) => {
  try {
    const leagues = await db("leagues").select("id", "name", "logo");

    if (leagues.length === 0) {
      res.status(404).json({ message: "No leagues found" });
    }

    res.status(200).send(leagues);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
