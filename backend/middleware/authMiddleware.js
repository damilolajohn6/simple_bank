const supabase = require("../config/supabaseConfig");

// Middleware to protect routes that require authentication
function requireAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Verify the user's token using the Supabase client
  supabase.auth.api.verify(token).then((result) => {
    if (result.error) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // User is authenticated; proceed to the next middleware
    next();
  });
}

module.exports = requireAuth;
