const supabase = require("../config/supabaseConfig");

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { sender_id, receiver_id, amount } = req.body;

    // Insert a new transaction record into the 'transactions' table
    const { data, error } = await supabase.from("transactions").insert([
      {
        sender_id,
        receiver_id,
        amount,
        transaction_date: new Date().toISOString(),
      },
    ]);

    if (error) {
      return res.status(500).json({ message: "Transaction creation failed" });
    }

    return res
      .status(201)
      .json({ message: "Transaction created successfully", data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Transaction creation failed" });
  }
};

// Fetch a user's transaction history
exports.getUserTransactions = async (req, res) => {
  try {
    const user_id = req.user.id; // Assuming you have user data in the request object

    // Fetch transaction records for the user from the 'transactions' table
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("sender_id", user_id) // Include transactions where the user is the sender
      .or("receiver_id", "eq", user_id) // Include transactions where the user is the receiver
      .order("transaction_date", { ascending: false });

    if (error) {
      return res
        .status(500)
        .json({ message: "Failed to fetch user transactions" });
    }

    return res.status(200).json({ transactions: data });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to fetch user transactions" });
  }
};
