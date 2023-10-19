const express = require("express");
const router = express.Router();
const transactionController = require("../../controllers/transactionController");

// Route for creating a new transaction
router.post("/create-transaction", transactionController.createTransaction);

// Route for fetching a user's transaction history
router.get("/transactions", transactionController.getUserTransactions);

module.exports = router;
