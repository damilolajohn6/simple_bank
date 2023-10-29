require("dotenv").config(); // Load environment variables

const app = require("./app");
const supabase = require("./config/supabaseConfig");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
