
const supabase = require("../config/supabaseConfig");

// Get account balance for the authenticated user
const getAccountBalance = async (req, res) => {
  const user = req.user; // Authenticated user obtained from middleware

  try {
    const { data, error } = await supabase
      .from("users")
      .select("account_balance")
      .eq("email", user.email)
      .single();

    if (error) {
      return res
        .status(500)
        .json({ message: "Failed to fetch account balance" });
    }

    return res.status(200).json({ account_balance: data.account_balance });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch account balance" });
  }
};

module.exports = {
  getAccountBalance,
};
