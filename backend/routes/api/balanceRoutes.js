const express = require("express");
const router = express.Router();
const requireAuth = require("../../middleware/authMiddleware");
const balanceController = require("../../controllers/balanceController");

// Get account balance (requires authentication)
router.get("/balance",  balanceController.getAccountBalance);

module.exports = router;
