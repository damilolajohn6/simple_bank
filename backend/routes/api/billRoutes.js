const express = require("express");
const router = express.Router();
const billController = require("../../controllers/billController");

// Route for creating a new bill
router.post("/create-bill", billController.createBill);

// Route for paying a bill
router.post("/pay-bill", billController.payBill);

// Route for fetching a user's bills
router.get("/bills", billController.getUserBills);

module.exports = router;
