const router = require("express").Router();
const {
  getEntries,
  getEntry,
  newEntry,
} = require("../controllers/data.controllers");

router.get("/", getEntries).get("/:id", getEntry).post("/", newEntry);

module.exports = router;
