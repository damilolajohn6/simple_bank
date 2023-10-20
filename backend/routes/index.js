const express = require("express");
const router = express.Router();

const authRoutes = require("./api/authRoutes");
const transactionRoutes = require("./api/transactionRoutes");
const billRoutes = require("./api/billRoutes");
const balanceRoutes = require('./api/balanceRoutes');

router.use("/auth", authRoutes);
router.use("/transactions", transactionRoutes);
router.use("/bills", billRoutes);
router.use("/balance", balanceRoutes);

module.exports = router;
