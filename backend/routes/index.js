const express = require("express");
const router = express.Router();

const authRoutes = require("./api/authRoutes");
const transactionRoutes = require("./api/transactionRoutes");
const billRoutes = require("./api/billRoutes");

router.use("/auth", authRoutes);
router.use("/transactions", transactionRoutes);
router.use("/bills", billRoutes);

module.exports = router;
