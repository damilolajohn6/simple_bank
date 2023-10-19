const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const requireAuth = require("../../middleware/authMiddleware");

// Route for user registration
router.post("/register", authController.registerUser);

// Route for user login
router.post("/login", authController.loginUser);

// Route for user profile (requires authentication)
router.get("/profile", requireAuth, authController.getUserProfile);

module.exports = router;
