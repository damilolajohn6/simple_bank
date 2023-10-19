const supabase = require("../config/supabaseConfig"); // Import the Supabase client

// User registration
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    // Registration successful
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Registration failed" });
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ message: "Login failed" });
    }

    // Login successful
    return res.status(200).json({ user, session });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Login failed" });
  }
};

// User logout
const logoutUser = async (req, res) => {
  try {
    await supabase.auth.signOut();

    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Logout failed" });
  }
};

// Get the current authenticated user
const getCurrentUser = (req, res) => {
  const user = supabase.auth.user();

  if (!user) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  return res.status(200).json(user);
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
