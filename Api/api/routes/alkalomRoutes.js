const express = require("express");
const router = express.Router();
const alkalomController = require("../controllers/alkalomController");

// List all occasions
router.get("/", alkalomController.getAllOccasions);

// List gifts by occasion id
router.get("/:id/ajandekok", alkalomController.getGiftsByOccasion);

module.exports = router;
