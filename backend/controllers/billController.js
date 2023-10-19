const supabase = require("../config/supabaseConfig");

// Create a new bill
exports.createBill = async (req, res) => {
  try {
    const { payee, amount, due_date, user_id } = req.body;

    // Insert a new bill into the 'billings' table
    const { data, error } = await supabase.from("billings").upsert([
      {
        payee,
        amount,
        due_date,
        user_id,
      },
    ]);

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Bill creation failed" });
    }

    return res
      .status(201)
      .json({ message: "Bill created successfully", bill: data[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Bill creation failed" });
  }
};

// Pay a bill
exports.payBill = async (req, res) => {
  try {
    const { billId } = req.body;

    // Update the 'paid' field in the 'billings' table to mark the bill as paid
    const { data, error } = await supabase
      .from("billings")
      .update({ paid: true })
      .eq("id", billId);

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Bill payment failed" });
    }

    return res
      .status(200)
      .json({ message: "Bill paid successfully", bill: data[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Bill payment failed" });
  }
};

// Fetch a user's bill history
exports.getUserBills = async (req, res) => {
  try {
    const user_id = req.user.id; // Authenticated user's ID

    // Retrieve the user's bill history from the 'billings' table
    const { data, error } = await supabase
      .from("billings")
      .select("*")
      .eq("user_id", user_id);

    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to fetch user bills" });
    }

    return res.status(200).json({ bills: data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch user bills" });
  }
};
