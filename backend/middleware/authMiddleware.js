const supabase = require("../config/supabaseConfig");

// Middleware to protect routes that require authentication
async function requireAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify the user's token using the Supabase client

    const { user, error } = await supabase.auth.api.verify(token);

    if (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Set the authenticated user in the request object
    req.user = user;

    // User is authenticated; proceed to the next middleware
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


module.exports = requireAuth;
