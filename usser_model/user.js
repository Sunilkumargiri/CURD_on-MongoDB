const mongoose = require("mongoose");

// MongoDB connection
mongoose.connect(
  "mongodb+srv://Sunil:sunil531412@cluster0.6mrvwec.mongodb.net/testdb"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  image: String,
  name: String,
  email: String
});

// Model export
module.exports = mongoose.model("User", userSchema);
