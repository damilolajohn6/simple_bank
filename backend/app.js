const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import API routes
const authRoutes = require('./routes/api/authRoutes');
const billRoutes = require('./routes/api/billRoutes');
const transactionRoutes = require('./routes/api/transactionRoutes');
const balanceRoutes = require("./routes/api/balanceRoutes");

// Use API routes
app.use('/api/auth', authRoutes);
app.use('/api/billing', billRoutes);
app.use('/api/transaction', transactionRoutes);
app.use("/balance", balanceRoutes);


module.exports = app;

