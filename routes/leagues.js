const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

// Get all leagues
router.get("/", async (_req, res) => {
  try {
    const leagues = await db("leagues").select("*");

    console.log(leagues);
  } catch (err) {
    console.error(err)
    }
});

module.exports = router;
