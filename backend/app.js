const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import API routes
const authRoutes = require('./routes/api/authRoutes'); // Example route, you should have others too

// Use API routes
app.use('/api/auth', authRoutes); // Example route, you should have others too

module.exports = app;

